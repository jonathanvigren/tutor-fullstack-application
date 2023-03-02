import { db } from "../connection.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signin = (req, res) => {

    const q = "SELECT * FROM users where email = ?"
    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("No user");

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

        if (!checkPassword) return res.status(400).json("Wrong password or username")

        const token = jwt.sign({ id: data[0].id }, "privateKey");
        const { password, ...others } = data[0]
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others)
    })

}

export const signup = (req, res) => {
    const q = "SELECT * FROM users WHERE email = ?"

    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(409).json("User exists")

        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users (`email`,`password`,`name`,`account_type`) VALUES (?,?,?,?)"
        const userInfo = [req.body.email, hashedPassword, req.body.name, req.body.account_type]

        db.query(q, userInfo, (err, data) => {
            if (err) return res.status(500).json(err);

            const userId = data.insertId;
//THIS ONE ABOVE IS FINE
            if (req.body.account_type === 'admin') {
                const adminQ = "INSERT INTO admins (`system_id`,`school_name`) VALUES (?,?)";
                const adminInfo = [userId, req.body.name];

                db.query(adminQ, adminInfo, (err, data) => {
                    if (err) return res.status(500).json(err);
                    return res.status(200).json("User created");
                });
//BELOW SHOULD BE FIXED, SCHOOL ID SHOULD BE GOTTEN FROM SCHOOL SEARCH QUERY
            } else if (req.body.account_type === 'teacher') {
                const teacherQ = "INSERT INTO teachers (`school_id`) VALUES (?)";
                const adminInfo = [userId];

                db.query(teacherQ, adminInfo, (err, data) => {
                    if (err) return res.status(500).json(err);
                    return res.status(200).json("User created");
                });

            } else if (req.body.account_type === 'tutor') {
                const tutorQ = "INSERT INTO admins (`school_id`) VALUES (?)";
                const adminInfo = [userId];

                db.query(tutorQ, adminInfo, (err, data) => {
                    if (err) return res.status(500).json(err);
                    return res.status(200).json("User created");
                });

            } else if (req.body.account_type === 'student') {
                const studentQ = "INSERT INTO students (`school_id`) VALUES (?)";
                const adminInfo = [userId];

                db.query(studentQ, adminInfo, (err, data) => {
                    if (err) return res.status(500).json(err);
                    return res.status(200).json("User created");
                });
            }
        });
    });
};
//ABOVE SHOULD BE FIXED
export const signout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("User logged out")
}