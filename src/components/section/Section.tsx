import {ISection} from "@/types/nav.interface";

export default function Section({id, title, description}: ISection) {
    return (
        <>
            <section className="m-24">
                <h1 className="text-4xl mb-4">{title}</h1>
                <p>{description}</p>
            </section>
        </>
    )
}
