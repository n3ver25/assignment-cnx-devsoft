/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import bootstrap from "../images/1.PNG";
const Css = () => {
  return (
    <div className="container">
      <div className="d-xl-flex py-3 ">
        <img
          src={bootstrap}
          alt="file state"
          className="img-thumbnail col-12 "
          style={{ width: "400px" }}
        />
        <div className="p-4">
          <h1>Bootstrap Framwork</h1>
          Bootstrap คือ Frontend Framework
          ยี่ห้อหนึ่งที่ช่วยให้เราสามารถสร้างหน้าเว็บให้ได้ง่ายขึ้น เพราะ
          Bootstrap มีทั้งระบบ grid ที่ช่วยเรื่องการวาง layout รองรับ responsive
          และมี component สำเร็จรูปให้ใช้ อย่างเช่น ปุ่ม หรือตารางต่างๆ
          ที่มาสำเร็จรูป รวมถึงตัวการ์ดต่างๆ ที่ลดความยุ่งยากในการออกแบบ
          และลดระยะเวลาในการทำงานด้วย
        </div>
      </div>
      <div className="py-3">
        <h1> BEM CSS คืออะไร</h1>
        BEM ย่อมาจาก Block Element Modifier ซึ่งเป็นการแบ่งส่วนต่าง ๆ
        บนหน้าเว็บไซต์ออกเป็น Block, Element, และ Modifier ข้อสั่งเกตุการเขียน
        CSS แบบ BEM คือการใช้ — (ขีดกลาง 2 ตัว) กับ __ (underscore 2 ตัว)
        และจะเขียนเป็น class ทั้งหมด จะไม่ใช้ #ID เพื่อความยืดหยุ่น
        เน้นไปที่การตั้งชื่อ ให้ตรงกับตัวที่เราใช้อยู่ในปัจจุบัน
        ลดเวลาในการไปไล่หาชื่อ หรือไอดีที่เราสร้างมาเฉพาะตัวสามารถสร้าง และ
        Dupicate ได้
        <div>
          <p>[css].alert {} // CSS ที่ใช้ร่วมกันทุกกล่อง</p>
          <p>.alert–success {} // CSS กล่องเขียว</p>
          <p>.alert–warning {} // CSS กล่องเหลือง</p>
          <p> .alert–error {} // CSS กล่องแดง[/css]</p>
        </div>
      </div>
      <div className="py-3">
        <h1> การใช้ #ID กับ .class</h1>
        <p>
          การเขียน Css มีด้วยกันหลายแบบ แต่การตั้งชื่อเพื่อเรียกใช้
          ส่วนใหญ่เราจะตั้งเพื่อให้ครอบคลุม และสามารถ เขียนใช้ได้เรื่อยๆ
          แต่ก็มีบ้างที่ตั้งชื่อเฉพาะ เพื่อบางตัว
        </p>
        <p>
          การเขียนโดยใช้ .class จะเป็นการเขียนเพื่อให้สามารถใช้ได้หลายครั้ง
          ขอดีคือการเขียนที่เดียว จะสามารถใช้ได้ทุกที่แต่เมื่องานมีจำนวนมาก
          แล้วการเขียนแบบ Class อาจจะส่งผลกระทบทุกเมื่อมีการเปลี่ยน 1
          ครั้งโดยใช่เหตุ
          <p>
            ตัวอย่างโค้ด
            {`
         .button {
             color: red;
         }
         `}
          </p>
        </p>
        <p>
          การเขียนโดยใช้ #ID จึงเป็นอีกทางเลือกหนึ่ง
          เมื่อการเขียนที่ซ้ำมากๆเข้าจะทำให้พังง่ายขึ้น การเขียนแบบID
          จะสามารถเรียกใช้ได้ครั้งเดียว เพื่อลดการใช้ซ้ำ
          แต่มีข้อเสียคือจำนวนที่มากเกินความจำเป็น
          ซึ่งบางส่วนอาจจะต้องการใช้ตัวคล้ายๆ ทำให้จำนวนโค้ดจะเยอะมากเกินไป
          <p>
            ตัวอย่างโค้ด
            {`
         #buttonA {
             color: blue;
         }
         `}
          </p>
        </p>
      </div>
      <div className="py-3">
        <h1> Ajax หรือการใช้ fetch API</h1>
        <p>
          ย่อมาจาก Asynchronous JavaScript and XML เป็นชื่อเทคนิคการพัฒนา web
          application แบบหนึ่ง ซึ่งประกอบด้วยเทคนิคย่อยๆ คือ JavaScript และ DOM
          ในฝั่ง client browser และใช้การติดต่อกับ server ในแบบ asynchrounous
        </p>
        <p>การเรียกใช้งาน API ต้องมี 3ส่วนด้วยกัน</p>
        <p>
          1. type หรือที่เรียกว่า เราจะทำอะไร ประกอบด้วย GET POST PUT DELETE
        </p>{" "}
        <p>2. url ของ API ที่เราจะเรียกใช้ type นั้นๆ </p>{" "}
        <p>
          3. body ของ สิ่งที่เราจะเรียกใช้ ในส่วนนี้ อาจจะมีการส่ง id password
          เพื่อไปขอ token ในการ login หรือ ส่งข้อมูล ไปใส่ฐานข้อมูลจะทำผ่านตัว
          body
        </p>
      </div>
      <div className="py-3">
        <h1> Console กับ Debugger</h1>
        <p>
          Console จะสามารถแสดงผลได้การทำงาน การมี error การติดบัค
          รวมถึงแจ้งเตือนข้อมูลต่างๆ เราสามารถ Log
          โค้ดดูการทำงานบางส่วนของโปรแกรมเมื่อมันทำงานได้ เมื่อไหร่
          ที่หน้าจอแสดงผลไม่ได้ หรือไม่สมบูรณ์ จะมีการ แสดงผลบน console
          เพื่อเป็นการแจ้งเตือนเมื่อมีข้อผิดพลาด
        </p>
        <p>
          Debugger เปรียบเสมือนการ log ดูงานเป็นระยะๆ
          สามารถเลือกที่จะให้ทำงานต่อจนจบ หรือจบการทำงานได้
          สามารถเลือกที่จะให้ทำงานทีละบรรทัดเพื่อหาจุดบกพร่องขอโค้ดได้เช่นกัน
          มีความละเอียดมากกว่าแบบ cosole แต่มาพร้อมกับความยุ่งยากในการใช้
        </p>
      </div>
    </div>
  );
};

export default Css;
