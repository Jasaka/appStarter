import Image from "next/image";
import SignIn from "@/components/composite/SignIn/SignIn";
import {Code, Heading2, Text} from "@/components/content/Text/Text";
import {Link} from "@/components/control/Link/Link";
import {Column} from "@/components/container/Flex/Flex";
import {auth, signOut} from "@/auth";
import {Button} from "@/components/control/Button/Button";

export default function Home() {
    return (
        <Column classNames="min-h-screen items-center justify-between p-24">
            <Header/>

            <main>
                Next.js, Auth.js, Tailwind, Storybook, TypeScript ⇔ FastAPI, Alembic, Docker, PostgreSQL, and more.
            </main>

            <footer className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <ContentLink href={"https://jan-samak.de"} heading={"Jan Samak"}
                             description={"The creator of this starter"}/>
                <ContentLink href={"https://nextjs.org/docs"} heading={"Next.js"}
                             description={"Find in-depth information about Next.js features and API."}/>
                <ContentLink href={"https://authjs.dev/"} heading={"Auth.js"}
                             description={"Learn more about the integrated authentication solution"}/>
                <ContentLink internal href={"/protected/protectedPage"} heading={"Protected"}
                             description={"Test to access a protected page"}/>
            </footer>
        </Column>
    );
}

async function Header() {
    const session = await auth();
    const user = session?.user;

    return (
        <header className="z-10 max-w-5xl w-full justify-between font-mono text-sm lg:flex">
            <Text
                className="flex h-fit w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Get started by reading the&nbsp;
                <Code className="font-mono font-bold">README.md</Code>
            </Text>
            <div
                className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                {user ? (
                    <Column classNames={"text-end"}>
                        <Text>
                            {`Good to see you again, ${user.name}!`}
                        </Text>
                        <form
                            action={async () => {
                                "use server"
                                await signOut();
                            }}
                        >
                            <Button type={"submit"} color={"dark"}>Sign out</Button>
                        </form>
                    </Column>
                ) : (
                    <SignIn/>
                )}
            </div>
        </header>
    )
}

interface ContentLinkProps {
    href: string;
    heading: string;
    description: string;
    internal?: boolean;
}

const ContentLink = ({href, heading, description, internal}: ContentLinkProps) => {
    return (
        <Link
            href={href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target={internal ? "_self" : "_blank"}
            rel="noopener noreferrer"
        >
            <Heading2 className={`mb-3 text-2xl font-semibold`}>
                {heading}{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
            </Heading2>
            <Text className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                {description}
            </Text>
        </Link>
    )
}
