import { auth } from "@/auth"
import {Column} from "@/components/container/Flex/Flex";
import {Button} from "@/components/control/Button/Button";

export default async function Page() {
  const session = await auth()

  const renderAuthContent = () => {
    if (!session) return <div>Not authenticated</div>
    return (
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    )

  }

  return (
    <Column>
      <Button href={"/"} className={"w-32"}>Back Home</Button>
        {renderAuthContent()}
    </Column>
  )
}