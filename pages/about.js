import React, { useContext } from "react"
import { Context, ContextProvider } from "../ContextProvider"

import { Button } from "@mui/material"
import Link from "next/link"


export default function About() {


    const { count, setCount } = useContext(Context)

    return (

        <>
            <Link href="/" ><h1>About page, go to Home {count}</h1></Link>
            <Button variant="contained" onClick={function () {
                setCount(pre => pre + 1)
            }}>add</Button>
        </>

    )
}