// import store from "@/store";
import errors from "@/utils/errors";
import { ElNotification } from "element-plus";
// import { Notification } from "element-plus";
// import { Message } from 'element-ui';

export function errorsAlert(error) {
  let requestBody = error.config.data ? JSON.parse(error.config.data) : null;
  
  let requestMethodName =
    requestBody && requestBody["method"] ? requestBody["method"] : "";
  let dataError = error.data.error ? error.data.error : null;
  
  if (dataError.data && dataError.message) {
    if (error.status == 422) {
      messageBox(
        `${requestMethodName} ${getValidateErrors(error) && getValidateErrors(error) }`
      );
    } else {
      messageBox(`${requestMethodName} ${dataError.message}`);
    }
  } else if (dataError.message) {
    messageBox(`<b>${requestMethodName}</b><br/> ${dataError.message}`);
  } else if (error.status && error.statusText) {
    if (error.data.error && error.data.error == "invalid_credentials") {
      messageBox(`<b>${requestMethodName}</b><br/> ${errors[401]} |401`);
    } else {
      messageBox(
        `<b>${requestMethodName}</b><br/> ${error.statusText} |${
          error.status
        } ${getValidateErrors(error)}`
      );
    }
  }
}

function messageBox(message) {
  ElNotification({
    title: 'error',
    message: message,
    type: 'error',
    dangerouslyUseHTMLString: true
  })
}

function getValidateErrors(error) {
  let status = error.status;
  if (error.data && error.data.error) {
    error = error.data.error;
  }
  if (status == 422 && error.data && error.data.errors) {
    let message = "<br/> - ";
    Object.keys(error.data.errors).forEach((filed) => {
      message += error.data.errors[filed].join(" <br/> - ");
    });
    return message;
  }
  return null;
}
