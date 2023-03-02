import express from "express"
import authRoutes from "./routes/auth.js"
import contactRoutes from "./routes/contacts.js"
import messageRoutes from "./routes/messages.js"
import postRoutes from "./routes/posts.js"
import usersRoutes from "./routes/users.js"
import adminsRoutes from "./routes/admins.js"
import teachersRoutes from "./routes/teachers.js"
import tutorsRoutes from "./routes/tutors.js"
import cors from "cors"
import cookieParser from  "cookie-parser"

const app = express()

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})

app.use(express.json())

app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  
app.use(cookieParser())
app.use("/backend/auth", authRoutes)
app.use("/backend/contacts", contactRoutes)
app.use("/backend/messages", messageRoutes)
app.use("/backend/posts", postRoutes)
app.use("/backend/users", usersRoutes)
app.use("/backend/admins", adminsRoutes)
app.use("/backend/teachers", teachersRoutes)
app.use("/backend/tutors", tutorsRoutes)

app.listen(3305, ()=>{
    console.log('connected to backend!')
})