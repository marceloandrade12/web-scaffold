import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { ApiManager, Logger } from "../../helpers";
import { Form, Input } from "antd";
import { useAuth } from "../../hooks";
import { Link, useHistory } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();

  const { login } = useAuth();

  const [form] = Form.useForm();

  const history = useHistory();

  Logger.log("LoginForm > render >", {});

  return (
    <Form
      name="login-form"
      form={form}
      onFinish={(values): void => {
        form
          .validateFields()
          .then(async (values) => {
            form.resetFields();
            // call login
            await ApiManager.login(
              values.username.trim(),
              values.password
            ).then((response) => {
              if (response.auth) {
                // so far so good
                // store token received
                login({
                  loggedIn: true,
                  apiToken: response.token,
                  user: values.username,
                });
                history.push("/dashboard");
              }
            });
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form.Item
        label={t("general.login.username")}
        name="username"
        rules={[
          { required: true, message: t("general.login.usernamePlaceholder") },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t("general.login.password")}
        name="password"
        rules={[
          { required: true, message: t("general.login.passwordPlaceholder") },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <p>
            Or <Link to="/register"> register now!</Link>
          </p>
        </div>
      </Form.Item>
    </Form>
  );
};
