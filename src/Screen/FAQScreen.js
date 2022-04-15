import React from "react";
import Header from "../components/Header/Header";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer/Footer";

function FAQScreen() {
  const items = [
    {
      id: 1,
      htmlId: "Accordion1",
      headingId: "head1",
      label: "چطور در سایت ثبت نام کنم؟",
      content:
        "برای ثبت‌نام از منوی بالای صفحه به قسمت «ثبت‌نام» بروید و شماره تلفن همراه خود را وارد کنید، کلید ورود را بزنید، پیامکی حاوی یک کد شش رقمی دریافت می‌کنید این کد را در قسمت مربوط به کد وارد کنید. در مرحله‌ی بعد با وارد کردن اطلاعاتی شامل نام و نام‌خانوادگی و تعیین کلمه‌ی عبور ثبت نام شما کامل خواهد شد. شماره تلفن همراه شما بعدا به عنوان نام کاربری شما شناخته خواهد شد.",
    },
    {
      id: 2,
      htmlId: "Accordion2",
      headingId: "head2",
      label: "چقدر زمان میبرد که میزبان نسبت به درخواست رزرو پاسخگو باشد؟",
      content:
        "ما تلاش می‌کنیم که با آموزش مناسب به میزبان‌ها، آن‌ها را نسبت به پاسخگویی درخواست‌ها در کمترین زمان ممکن ترغیب نماییم.",
    },
    {
      id: 3,
      htmlId: "Accordion3",
      headingId: "head3",
      label: "هر اقامتگاه را برای چه مدت می‌توانم اجاره کنم؟",
      content:
        "حداقل و حداکثر زمان اجاره هر اقامتگاه در صفحه‌ی اقامتگاه توسط میزبان مشخص شده است.",
    },
  ];
  return (
    <div>
    <Accordion items={items}/>
    </div>
  );
}

export default FAQScreen;
