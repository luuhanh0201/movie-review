import images from "@/assets/images";
import { URL_DB_ACCOUNT } from "@/assets/images/api";
import { saveToSessionStorage } from "@/models/sessionStorage";
import { Button, Checkbox, Input, Form, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login: React.FC = () => {
    type FieldType = {
        password?: string;
        remember?: boolean;
        email?: string;
    };

    // const { navigateTo } = useHref()
    const [loginForm, setLoginForm] = useState<FieldType>({
        email: "",
        password: "",
        remember: false
    })
    // const [validAccount, setValidAccount] = useState({})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFormLogin = async (event: any) => {
        event.preventDefault()
        const { name, value } = event.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        })
        // console.log(infoSignUp);

    }
    const handleSubmitForm = async () => {
        // event.preventDefault()

        axios.post(`${URL_DB_ACCOUNT}/signin`, loginForm)
            .then((response) => {
                console.log(response);
                message.success(response.data.message)
                saveToSessionStorage(response.data.accessToken, response.data.user)
                setTimeout(() => {
                    window.location.href = "/"
                }, 1000)
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
            <div className="bg-black/90 rounded-lg animate__animated animate__zoomIn ">
                <Form
                    className="border border-primaryColor rounded-md p-12 "
                    style={
                        {
                            minWidth: "500px",
                        }
                    }
                >
                    <h1 className="text-white text-3xl font-bold mb-12">Login</h1>
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
                            name="email"
                            className="py-2 border-primaryColor"
                            placeholder="Email"
                            onChange={handleFormLogin}
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
                            name="password"
                            placeholder="Password"
                            className="py-2 border-primaryColor"
                            onChange={handleFormLogin}
                        />
                    </Form.Item>

                    <Form.Item<FieldType> className="py-2">
                        <Button
                            onClick={handleSubmitForm}
                            htmlType="submit"
                            className="w-full text-white font-medium hover:bg-red-600 hover:text-white hover:border-white h-12 text-lg"
                        >
                            Login
                        </Button>
                        <div className="flex justify-between mt-2">
                            <Form.Item<FieldType>
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 0,
                                    span: 32,
                                }}
                            >
                                <Checkbox className="text-white bg">Remember me</Checkbox>

                            </Form.Item>
                            <Link to={""} className="text-white">Need help?</Link>
                        </div>
                        <p className="text-white text-center">Do not have an account? <Link to={'/signup'} className="text-red-600 p-2">Register now</Link></p>
                    </Form.Item>


                </Form>
            </div>
        </div >
    );
}

export default Login;