import lists from "../data/lists";
import {GetServerSideProps} from "next";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function ListIndex({listIndex}: {listIndex: number}) {
    const thisList = lists[listIndex].split("\n");

    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [wordIndex, setWordIndex] = useState<number>(0);

    useEffect(() => {
        if (isRunning) {
            let index = 0;
            const timer = setInterval(() => {
                if (index === (thisList.length - 1)) {
                    clearInterval(timer);
                    setIsRunning(false);
                    setWordIndex(0);
                } else {
                    index++;
                    setWordIndex(prev => prev + 1);
                }
            }, 1500);
        }
    }, [isRunning]);

    return (
        <div className="w-full h-screen flex items-center justify-center">
            {isRunning ? (
                <p className="text-4xl">{thisList[wordIndex]}</p>
            ) : (
                <div className="flex items-center">
                    <button className="p-2 bg-gray-100 rounded mr-4" onClick={() => setIsRunning(true)}>start</button>
                    <Link href="/"><a className="p-2 bg-gray-100 rounded mr-4">back</a></Link>
                </div>
            )}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const listIndex = +context.params.listIndex;

    return {
        props: {listIndex}
    };
}