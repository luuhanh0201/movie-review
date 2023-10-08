import images from "@/assets/images";
import { Button, Checkbox, Input, Form } from "antd";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
        email?: string;
    };
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
                            className="py-2 border-primaryColor"
                            placeholder="Email" />
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
                            className="py-2 border-primaryColor" />
                    </Form.Item>

                    <Form.Item<FieldType> className="py-2">
                        <Button
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