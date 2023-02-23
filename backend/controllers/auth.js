import { db } from "../connection.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signin = (req,res)=>{

    const q = "SELECT * FROM users where email = ?"
    db.query(q,[req.body.email], (err,data)=>{
        if (err) return res.status(500).json(err);
        if(data.length ===0) return res.status(404).json("No user");

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

        if(!checkPassword) return res.status(400).json("Wrong password or username")

        const token = jwt.sign({id:data[0].id}, "privateKey");
        const {password, ...others} = data[0]
        res.cookie("accessToken", token,{
            httpOnly: true,
        }).status(200).json(others)
    })

}

export const signup = (req,res)=>{
    const q = "SELECT * FROM users WHERE email = ?"

    db.query(q,[req.body.email], (err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User exists")
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users (`email`,`password`,`name`,`description`) VALUES (?,?,?,?)"
        const userInfo = [req.body.email,hashedPassword,req.body.name,req.body.description]
        db.query(q,userInfo, (err,data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json("User created")
        })
    })  

}

export const signout = (req,res)=>{
    res.clearCookie("accessToken", {
        secure:true,
        sameSite:"none"
    }).status(200).json("User logged out")
}