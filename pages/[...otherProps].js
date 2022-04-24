import React, { useContext, useEffect } from "react"
import { Context, ContextProvider } from "../ContextProvider"

import { Button } from "@mui/material"
import Link from "next/link"





export async function getServerSideProps(context) {

    const { params, query } = context

    delete query.otherProps


    console.log(context)

    return {
        props: { queryObj: query, paramArr: params.otherProps }, // will be passed to the page component as props
    }
}


export default function Other({ paramArr, queryObj }) {



    const { count, setCount } = useContext(Context)


    useEffect(function () {

        console.log(paramArr)
        console.log(queryObj)

    }, [])

    return (

        <>
            <h1>404</h1>
            {paramArr.map((item, index) => <b key={index}>{item}&nbsp;</b>)}
            <br />
            {JSON.stringify(queryObj)}

            {/* <Link href="/" ><h1>go to Home {count}</h1></Link>
            <Button variant="contained" onClick={function () {
                setCount(pre => pre + 1)
            }}>add</Button> */}
        </>

    )
}