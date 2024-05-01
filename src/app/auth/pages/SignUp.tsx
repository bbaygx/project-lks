import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { SignUpFormSchema } from "@/schemas/schema";
import { useCallback, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import { GlobalWorld } from "@/components/GlobalWorld";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ICON } from "@/icons/icons";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { SignUpForm } from "@/api/api";

interface SignUpFormResponse {
  statusCode?: number;
  // Jika ada properti lain yang dikembalikan oleh SignUpForm, tambahkan di sini
}

export default function SignUp() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const navigate = useNavigate();
  // const [error, setError] = useState("");
  const { toast } = useToast();

  const initializeForm = useCallback(() => {
    return useForm<z.infer<typeof SignUpFormSchema>>({
      resolver: zodResolver(SignUpFormSchema),
      defaultValues: {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: "",
      },
    });
  }, []);

  const form = initializeForm();

  async function onSubmit(values: z.infer<typeof SignUpFormSchema>) {
    // validasi jika password tidak sama
    if (values.password !== values.confirmPassword) {
      return toast({
        title: "Password do not match!",
        description: "both passwords must be the same",
        type: "foreground",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }

    const formData = new FormData();

    formData.append("email", values.email);
    formData.append("displayName", values.displayName);
    formData.append("password", values.password);
    formData.append("confirmPassword", values.confirmPassword);
    formData.append("profilePic", values.profilePic[0]);

    try {
      const result = await SignUpForm(formData);
      const signUpResult = result as SignUpFormResponse;

      // Jika permintaan berhasil
      if (signUpResult?.statusCode === 201) {
        toast({
          title: "Success!",
          description: "Your account has been successfully created.",
          type: "background",
        });
        form.reset(); // Reset form fields
        navigate("/");
      } else {
        // Jika terjadi kesalahan pada sisi server
        toast({
          title: "Error!",
          description: "Something went wrong on our end.",
          type: "foreground",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    } catch (error) {
      // Jika terjadi kesalahan pada permintaan atau jaringan
      toast({
        title: "Error!",
        description: "Failed to create account. Please try again later.",
        type: "background",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  const GlobalWorldComponent = useMemo(() => {
    return <GlobalWorld />;
  }, []);

  const ImageComponent = useMemo(() => {
    return (
      <div className="">
        <Avatar>
          {selectedImage ? (
            <AvatarImage src={URL.createObjectURL(selectedImage)} />
          ) : (
            <AvatarFallback>UI</AvatarFallback>
          )}
        </Avatar>
      </div>
    );
  }, [selectedImage]);

  return (
    <div className="">
      <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 ">
        <div className="flex items-center justify-center py-12 border-r">
          <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Sign up</h1>
                  <p className="text-balance text-muted-foreground">
                    Take the first step towards a more fulfilling life. Sign up
                    now and unlock a world of possibilities.
                  </p>
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Your password"
                              {...field}
                              type={seePassword ? "text" : "password"}
                            />
                            <button
                              className="absolute top-2 right-4 text-gray-700"
                              onClick={() => setSeePassword(!seePassword)}
                              type="button"
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
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Confirm password"
                            {...field}
                            type={seePassword ? "text" : "password"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex py-4 gap-5 justify-center items-center h-full">
                    {ImageComponent}
                    <div className="">
                      <FormField
                        control={form.control}
                        name="profilePic"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Select an upload your image profile
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                name={field.name}
                                ref={field.ref}
                                onBlur={field.onBlur}
                                onChange={(e) => {
                                  field.onChange(e.target.files);
                                  setSelectedImage(e.target.files?.[0] || null);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <Button type="submit">Submit</Button>

                <div className="mt-4 text-center text-sm">
                  Have an account?{" "}
                  <Link to="/auth/sign-in" className="underline">
                    Sign in
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
