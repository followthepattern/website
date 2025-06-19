import classNames from "classnames";
import { motion } from "framer-motion"
import UploadInput from "./mocks/uploadInput";

enum Type {
    SignIn = 1,
    UpdateUser,
    Subscribe,
}

interface FormType {
    type: Type
    formClass: string
    title: {
        text: string
        className: string
    },
    subTitle: {
        text: string
        className: string
    },
    firstInput: {
        text: string
        className: string
        inputClassName?: string
        placeHolder?: string
    }
    secondInput: {
        text: string
        className: string
        type: string
    }
    button: {
        parentClass: string
        text: string
        className: string
    }
}

const forms: FormType[] = [
    {
        type: 1,
        formClass: "bg-white py-12 sm:border sm:border-gray-200 sm:shadow-lg",
        title: {
            text: "Sign in to your account",
            className: "justify-center text-xl font-bold",
        },
        subTitle: {
            text: "Use your Company e-mail address",
            className: "justify-center",
        },
        firstInput: {
            text: "Email address",
            className: "block text-sm font-medium leading-6 text-gray-900",
            inputClassName: "py-1.5"
        },
        secondInput: {
            text: "Password",
            className: "block text-sm font-medium leading-6 text-gray-900",
            type: "text"
        },
        button: {
            parentClass: "",
            text: "Sign In",
            className: "px-3 w-full text-sm text-white rounded-lg bg-indigo-500 hover:bg-indigo-700 focus-visible:outline-indigo-500",
        },
    },
    {
        type: 2,
        formClass: "bg-white py-6 sm:py-12 sm:border sm:border-gray-200 sm:shadow-lg",
        title: {
            text: "Update User",
            className: "justify-start text-xl font-semibold",
        },
        subTitle: {
            text: "Update user info",
            className: "justify-start",
        },
        firstInput: {
            text: "Username",
            className: "block text-sm font-medium leading-6 text-gray-900",
            inputClassName: "py-1.5"
        },
        secondInput: {
            text: "Upload your profile picture",
            className: "block text-sm font-medium leading-6 text-gray-900",
            type: "file"
        },
        button: {
            parentClass: "justify-end",
            text: "Save",
            className: "px-3 bg-blue-500 text-sm text-white rounded-md hover:bg-blue-700 focus-visible:outline-blue-500",
        },
    },
    {
        type: 3,
        formClass: "bg-gradient-to-r from-indigo-700 from-30% to-sky-600 py-12",
        title: {
            text: "Get notified when we’re launching.",
            className: "justify-center text-3xl font-semibold text-white",
        },
        subTitle: {
            text: "Want product news and updates? Subscribe to our newsletter",
            className: "justify-start text-white/80 pt-2",
        },
        firstInput: {
            text: "",
            className: "block text-sm pl-1 font-medium leading-6 text-gray-900 py-2 hidden",
            inputClassName: "bg-white/10 py-2 ring-1 ring-inset text-white ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white",
            placeHolder: "Enter your email",
        },
        secondInput: {
            text: "",
            className: "block text-sm font-medium leading-6 text-gray-900",
            type: "file"
        },
        button: {
            parentClass: "justify-center",
            text: "Notify me",
            className: "bg-white px-6 rounded-3xl hover:bg-gray-100 text-sky-700",
        },
    },
]

function getForm(count: number): FormType {
    return forms[count % 3]
}

interface MotionFormProperties {
    count: number
    className?: string
}

export default function MotionForm(props: MotionFormProperties) {
    const count = props.count;

    const form = getForm(count);

    const spring = {
        stiffness: 700,
        damping: 30
    };

    return (
        <div className={classNames(props.className, "")}>
            <p className="pl-2 sm:pl-2.5 pb-1 italic text-lg sm:text-xl sm:pb-2 text-neutral-800">We build everything...</p>
            <div className="border-4 border-dashed p-[1px] sm:p-2 rounded-lg border-gray-400">
                <motion.div className={classNames("rounded-lg px-6 sm:py-12 sm:px-12", form.formClass)} layout transition={spring}>
                    <form className="space-y-6" action="#" method="POST">
                        <div className="sm:mx-auto w-full">
                            <div
                                className={classNames("flex", form.title.className)}
                            >
                                <motion.div
                                    transition={spring}
                                    layout

                                >
                                    <motion.span layout>
                                        {form.title.text}
                                    </motion.span>

                                </motion.div>
                            </div>
                            <div
                                className={classNames("flex text-sm text-gray-600 mt-1", form.subTitle.className)}
                            >
                                <motion.div
                                    transition={spring}
                                    layout

                                >
                                    <motion.span layout>
                                        {form.subTitle.text}
                                    </motion.span>

                                </motion.div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="input1" className={form.firstInput.className}>
                                {form.firstInput.text}
                            </label>
                            <div className="sm:mt-2">
                                <input
                                    name="input1"
                                    type="text"
                                    required
                                    className={classNames("block w-full rounded-md border-0 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", form.firstInput.inputClassName)}
                                    placeholder={form.firstInput.placeHolder}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="input2" className={form.secondInput.className}>
                                {form.secondInput.text}
                            </label>
                            {form.type == Type.SignIn && <div className="sm:mt-2">
                                <input
                                    name="input2"
                                    type={form.secondInput.type}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>}
                            {form.type == Type.UpdateUser && <UploadInput />}
                        </div>

                        {form.type == Type.SignIn && <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className={classNames("text-sm leading-6")}>
                                <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </button>
                            </div>
                        </div>
                        }

                        <div
                            className={classNames("flex", form.button.parentClass)}
                        >
                            {form.type == Type.UpdateUser && <motion.button
                                layout
                                transition={spring}
                                type="submit"
                                onClick={e => e.preventDefault()}
                                className={classNames("flex justify-center px-3 py-1.5 hover:bg-gray-300 rounded-md mr-2 font-semibold leading-6 shadow-sm bg-gray-100")}
                            >
                                <motion.p layout>Cancel</motion.p>
                            </motion.button>}
                            <motion.button
                                layout
                                transition={spring}
                                type="submit"
                                onClick={e => e.preventDefault()}
                                className={classNames("flex justify-center py-1.5 font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", form.button.className)}
                            >
                                <motion.p layout>{form.button.text}</motion.p>
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}