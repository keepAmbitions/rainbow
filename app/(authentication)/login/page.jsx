"use client";
// import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
const LoginPage = () => {
  // const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // 希望可以反显接口数据到表单中
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  console.log(errors); // watch errors
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* 反显值的功能具体的实现要看具体的组件，这里只是一个示例 */}
      <input defaultValue="默认反显值" {...register("username")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("passcode", { required: true })} />
      {/* errors will return when field validation fails  */}
      {/* 当某个字段校验失败时，会由errors返回 */}
      <input type="submit" />
    </form>
  );
};

export default LoginPage;