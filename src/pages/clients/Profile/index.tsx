
import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload } from 'antd';

// import { useParams } from 'react-router-dom';

function Profile() {


    return (
        <div className="w-full flex justify-center items-center">
            <div style={{ width: "700px" }} className="w-96 border px-8 text-center">
                <Space direction="vertical" style={{ width: '100%' }} >
                    <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture-circle"
                        maxCount={1}
                    >
                        <Button icon={<UploadOutlined />}>Upload </Button>
                    </Upload>
                  
                </Space>
            </div>
        </div>
    );
}

export default Profile;