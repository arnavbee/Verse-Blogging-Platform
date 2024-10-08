import { Blog } from "../hooks"
import { Appbar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog} : {blog: Blog}) => {
    return (
    <div>

    <Appbar/>
    
    <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-10">
        <div className="col-span-8">
            <div className="text-5xl font-extrabold">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
                  Post on 19th August 2024
            </div>
            <div className="pt-4">
                {blog.content}
            </div>

        </div>
        <div className="col-span-4">
            Author
            <div className="flex">
                <div className="pr-4 flex flex-col justify-center">
                <Avatar name={blog.author.name || "Anonymous"}/>
                </div>
            <div className="text-xl font-bold">
            {blog.author.name || "Anonymous"}
            </div>

            </div>

            <div className="pt-2 text-slate-500">
             A Cool Rocking Nerd with Caffeine in blood
            </div>

        </div>

    </div>
    </div>

    </div>
    )
}