import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {}, []);
  return (
    <div>
      <NavBar />
      <div className="pageContainer">
        <div className="contentContainer">
          <h2>Have a question or need some help? Send us a message!</h2>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: `<div class="typeform-widget" data-url="https://form.typeform.com/to/wB7b8BDF" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=wB7b8BDF&utm_source=typeform.com-01DY8FQB5W992SGVCYEYAAGC8P-premium&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>`,
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .pageContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: calc(100vh - 132px);
        }
        .contentContainer {
          display: flex;
          width: 80%;
          margin-top: 40px;
          flex-direction: column;
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  );
}

export default Contact;
