/* eslint-disable @typescript-eslint/no-explicit-any */
import images from "@/assets/images";
import { URL_DB_ACCOUNT } from "@/assets/images/api";
// import { validSignUp } from "@/validates";
import { Button, Input, Form, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
interface FieldType {
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
    confirmPassword: string | undefined;
}
const SignUp: React.FC = () => {
    // const { navigateTo } = useHref()
    const [infoSignUp, setInfoSignUp] = useState<FieldType>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    // const [validAccount, setValidAccount] = useState({})
    const handleFormSignUp = async (event: any) => {
        event.preventDefault()
        const { name, value } = event.target;
        setInfoSignUp({
            ...infoSignUp,
            [name]: value
        })
        // console.log(infoSignUp);

    }
    const handleSignUpAccount = async () => {
        // event.preventDefault()

        axios.post(`${URL_DB_ACCOUNT}/signup`, infoSignUp)
            .then((response) => {
                console.log(response);
                message.success(response.data.message)
                setTimeout(() => {
                   window.location.href = "/login"
                },1000)
                
            })
            .catch(err => {
                message.error(err.response.data.message || "Vui lòng kiểm tra lại thông tin");

                console.log(err.response.data);
            })

    }
    return (
        <div className=" fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center p-48 bg-cover bg-no-repeat bg-center h-screen"
            style={{
                backgroundImage: `url(${images.banner})`
            }}>
            <div className="bg-black/90 rounded-lg animate__animated animate__zoomIn">
                <Form
                    className="border border-primaryColor rounded-md p-12 "
                    style={
                        {
                            minWidth: "500px",
                        }
                    }

                >
                    <h1 className="text-white text-3xl font-bold mb-12">Sign Up</h1>
                    <Form.Item<FieldType>
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name!',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Full Name"
                            className="py-2 border-primaryColor"
                            name="username"
                            value={infoSignUp.username}
                            onChange={handleFormSignUp}
                        />
                    </Form.Item>
                    <Form.Item<FieldType>
                        className="mb-8"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input
                            className="py-2 border-primaryColor"
                            placeholder="Email"
                            name="email"
                            value={infoSignUp.email}
                            onChange={handleFormSignUp}
                        />

                    </Form.Item>

                    <Form.Item<FieldType>
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password
                            placeholder="Password"
                            className="py-2 border-primaryColor"
                            name="password"
                            value={infoSignUp.password}
                            onChange={handleFormSignUp} />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password
                            placeholder="Confirm password"
                            className="py-2 border-primaryColor"
                            name="confirmPassword"
                            value={infoSignUp.confirmPassword}
                            onChange={handleFormSignUp} />
                    </Form.Item>

                    <Form.Item<FieldType> className="py-2">
                        <Button
                            htmlType="submit"
                            className="w-full text-white font-medium hover:bg-red-600 hover:text-white hover:border-white h-12 text-lg"
                            onClick={handleSignUpAccount}
                        >
                            SignUp
                        </Button>
                        <div className="flex justify-between mt-2">
                            <Form.Item<FieldType>


                                wrapperCol={{
                                    offset: 0,
                                    span: 32,
                                }}
                            >


                            </Form.Item>
                            <Link to={""} className="text-white">Need help?</Link>
                        </div>
                    </Form.Item>

                    <p className="text-white text-center">Do not have an account? <Link to={"/login"} className="text-red-600 p-2">Register now</Link></p>

                </Form >
            </div >
        </div >
    );
}

export default SignUp;