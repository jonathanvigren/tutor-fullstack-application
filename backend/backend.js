import express from "express"
import authRoutes from "./routes/auth.js"
import contactRoutes from "./routes/contacts.js"
import messageRoutes from "./routes/messages.js"
import postRoutes from "./routes/posts.js"
import profileRoutes from "./routes/profile.js"
import usersRoutes from "./routes/users.js"
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
app.use("/backend/profile", profileRoutes)
app.use("/backend/users", usersRoutes)

app.listen(3305, ()=>{
    console.log('connected to backend!')
})