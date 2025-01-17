import React,{useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Modal, Form, Input } from "antd";
const { TextArea } = Input;

export default function ViewRequest() {
  const location = useLocation();
  const navigate = useNavigate();
    const request = location.state?.request;
    const [form] = Form.useForm();

    
    const [responseModal, setResponseModal] = useState(false);
    const handleSubmitResponse = async () => {
      try {
        const values = await form.validateFields();
        console.log("Response values:", {
          ...values,
          request: request.id,
          status: "pending", // Default status for new responses
        });
        form.resetFields();
        setResponseModal(false);
      } catch (error) {
        console.error("Form validation failed:", error);
      }
    };
// console.log(request)
  if (!request) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
        <div className="max-w-4xl mx-auto text-center text-gray-900 dark:text-white">
          Request not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="mb-6 border-b dark:border-gray-700 pb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {request.title}
            </h1>
            {request.is_anonymous ? (
              <p className="text-lime-500 dark:text-lime-700">
                Posted by an anonymous user
              </p>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                Posted by {request.user?.first_name} {request.user?.last_name}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Request Details
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Location:</span>{" "}
                    {request.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(request.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Budget:</span> $
                    {request.budget}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Dress Code:</span>{" "}
                    {request.dress_code}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Theme:</span> {request.theme}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">
                      Preferred Communication:
                    </span>{" "}
                    {request.preferred_communication}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Preferences
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Looking for:</span>{" "}
                    {request.target_gender}, {request.age_range}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Comfort Level:</span>{" "}
                    {request.comfort_level}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Meeting Environment:</span>{" "}
                    {request.meeting_environment}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Urgency Level:</span>{" "}
                    {request.urgency_level}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  About
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                      Reason
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {request.reason}
                    </p>
                  </div>
                  {request.special_msg && (
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        Special Message
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {request.special_msg}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {request.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-200 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {request.language_preferences.map((language) => (
                    <span
                      key={language}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {request.accessibility_requirements && (
            <div className="mt-6 pt-6 border-t dark:border-gray-700">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                Accessibility Requirements
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {request.accessibility_requirements}
              </p>
            </div>
          )}

          <div className="mt-8">
            <button
              className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition"
              onClick={() => setResponseModal(true)}
            >
              Express Interest
            </button>
          </div>
        </div>
      </div>
      <Modal
        open={responseModal}
        onCancel={() => {
          setResponseModal(false);
          form.resetFields();
        }}
        title="Express Interest"
        width={600}
        onOk={handleSubmitResponse}
        okText="Submit Response"
        cancelText="Cancel"
        okButtonProps={{
          className: "bg-rose-600 hover:bg-rose-700 border-rose-600",
        }}
      >
        <Form
          form={form}
          layout="vertical"
          className="mt-4"
          initialValues={{
            status: "pending",
          }}
        >
          <Form.Item
            name="msg"
            label="Your Message"
            rules={[
              {
                required: true,
                message: "Please write a message explaining your interest",
              },
            ]}
          >
            <TextArea
              rows={4}
              size="large"
              placeholder="Explain why you're interested in this request and why you would be a good match..."
            />
          </Form.Item>

          {/* Feedback field is typically filled by the request creator later */}
          {/* Status will be handled automatically by the backend */}
        </Form>
      </Modal>
    </div>
  );
}
