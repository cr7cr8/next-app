import React, { useContext } from "react"
import { Context, ContextProvider } from "../ContextProvider"

import { Button } from "@mui/material"
import Link from "next/link"


export async function getServerSideProps(context) {
    console.log("-----------------------")
    console.log(context.query)
    console.log(context.params)

    return {
        props: {}, // will be passed to the page component as props
    }
}


export default function Other() {

    console.log()

    const { count, setCount } = useContext(Context)

    return (

        <>
        <h1>other</h1>
            {/* <Link href="/" ><h1>go to Home {count}</h1></Link>
            <Button variant="contained" onClick={function () {
                setCount(pre => pre + 1)
            }}>add</Button> */}
        </>

    )
}