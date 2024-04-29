import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInFormSchema } from "@/schemas/schema";
import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import * as z from "zod";
import { GlobalWorld } from "@/components/GlobalWorld";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ICON } from "@/icons/icons";
import { motion } from "framer-motion";

export default function SignIn() {
  const [seePassword, setSeePassword] = useState<boolean>(false);

  const initializeForm = useCallback(() => {
    return useForm<z.infer<typeof SignInFormSchema>>({
      resolver: zodResolver(SignInFormSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
  }, []);

  const form = initializeForm();

  function onSubmit(values: z.infer<typeof SignInFormSchema>) {
    console.log(values);
    form.reset();
  }

  const GlobalWorldComponent = useMemo(() => {
    return <GlobalWorld />;
  }, []);

  return (
    <div className="">
      <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 ">
        <div className="flex items-center justify-center py-12 border-r">
          <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Sign in</h1>
                  <p className="text-balance text-muted-foreground">
                    Take the first step towards a more fulfilling life. Sign in
                    now and unlock a world of possibilities.
                  </p>
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="name@example.com"
                            {...field}
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormControl>
                          <div className="relative flex*:">
                            <Input
                              placeholder="Your password"
                              {...field}
                              type={seePassword ? "text" : "password"}
                              id="password"
                            />
                            <button
                              className="absolute top-2 right-4 text-gray-700"
                              type="button"
                              onClick={() => setSeePassword(!seePassword)}
                            >
                              {seePassword ? (
                                <ICON.FaRegEye size={20} />
                              ) : (
                                <ICON.FaRegEyeSlash size={20} />
                              )}
                            </button>
                          </div>
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit">Submit</Button>

                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link to="/auth/sign-up" className="underline">
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div className="relative hidden bg-muted lg:block">

          {GlobalWorldComponent}
        </div>
      </div>
    </div>
  );
}
