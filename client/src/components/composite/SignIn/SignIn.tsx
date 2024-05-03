import {signIn} from "@/auth";
import {Button} from "@/components/control/Button/Button";
import {Column} from "@/components/container/Flex/Column";
import {Text} from "@/components/content/Text/Text";
import {Field, Fieldset, Label} from "@/components/form/Fieldset/Fieldset";
import {Input} from "@/components/form/Input/Input";

export default function SignIn() {
    return (
        <Column>
            <form
                action={async (formData) => {
                    "use server"
                    await signIn("credentials", formData);
                }}
            >
                <Fieldset>
                    <Field className={"mb-4"}>
                        <Label htmlFor={"email"}>E-Mail</Label>
                        <Input id={"email"} name={"email"} type={"email"}/>
                    </Field>
                    <Field className={"mb-4"}>
                        <Label htmlFor={"password"}>Password</Label>
                        <Input id={"password"} name={"password"} type={"password"}/>
                    </Field>
                    <Button type={"submit"} color={"dark"}>Sign in with Credentials</Button>
                </Fieldset>
            </form>
            <Text className={"w-full text-center"}>or</Text>
            <form
                action={async () => {
                    "use server"
                    await signIn("github");
                }}
            >
                <Button type={"submit"} className={"w-full"} color={"dark"}>Sign in with GitHub</Button>
            </form>
        </Column>
    );
}