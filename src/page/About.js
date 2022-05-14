import React from "react";
import image from "../images/Capture.PNG";
const About = () => {
  return (
    <div className="container">
      <h3>จงอธิบายความหายตามภาพด้านล่าง</h3>
      <div className="d-flex">
        <img
          src={image}
          alt="file state"
          className="img-thumbnail col-3 "
          style={{ width: "400px" }}
        />
        <div className="col-9 p-3">
          <h4>โครงสร้างดาต้าเบส ประกอบด้วย 2 ฝั่งทำงานควบคู่กัน</h4>
          <p>
            {" "}
            คือฝั่ง Backend หรือ Server กับ Fontend หรือ Cliant
            มีตัวกลางเป็นอินเตอร์เน็ต สามารถทำงานแบบออฟไลน์ได้ในวง LAN
            เดียวกันหรือที่เรียกแบบ File server เริ่มจากการที่ ฝั่งผู้ใช้งาน
            เรียกใช้ ระบบ (Request) ไปยังฐานข้อมูล Database
            แต่ไม่สามารถเรียกได้ทันที่ จึงมีการติดต่อตัวกลาง คือWebsever
            ก่อนเพื่อทำการขอรหัส และให้ Webserver
            จัดการเกี่ยวกับการเข้ารหัสดาต้าเบส
          </p>
          <p>
            เมื่อดาต้าเบสประมวลผลเสร็จ จะส่งข้อมูลเข้ารหัสบางส่วน Token สร้างโดย
            JWT ที่มี secret code ในการสร้างขึ้นมาทำให้ไม่สามารถถอดรหัสได้ง่ายๆ
            ฝั่งผู้ใช้งานจะได้รับเพียงแค่สิ่ง ที่เรียกไป
            แต่เมื่อการเข้ารหัสผ่านผิด ตัวดาต้าเบสจะส่ง เออเร่อต่างๆกับมาแทน
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
