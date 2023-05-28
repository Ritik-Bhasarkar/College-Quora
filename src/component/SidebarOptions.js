import React from 'react'
import { Add } from "@material-ui/icons";
import "./SidebarOption.css";


function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg"
          alt=""
        />
        <p>Web development</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://techcrunch.com/wp-content/uploads/2017/02/android-studio-logo.png"
          alt=""
        />

        <p>Android</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://www.open.edu.au/-/media/blog/2022/02-february/counseller-vs-psychologist.jpg?h=583&iar=0&w=715&rev=512145ae285b477ca8b74b09c9b9784b&hash=DC8EFD2462F9FC1C60EB86BA38F5CC89"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/entrepreneurship-tycoon-small-business-enterprise-concept-83519529.jpg"
          alt=""
        />
        <p>Entrepreneurship</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://uploads-ssl.webflow.com/5e86c7170f1ab21474c3f2a4/609bbba89bb59bed67a73d55_sergey-sokolov-yxJavcfExYs-unsplash.jpg"
          alt=""
        />
        <p>Photography</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/music-notes-26350450.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/04/Dance-Cover.jpg"
          alt=""
        />
        <p>Dance</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.investopedia.com/thmb/YDiMCM5eEaqihHHFpPlOh3YnSDw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/INV_TopRoboticsStocks2Q23_GettyImages-1306826852-3170ea2d9b474ff0aa767b7da352c9d3.jpg"
          alt=""
        />
        <p>Robotics</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.raiuniversity.edu/wp-content/uploads/sonali-12333.jpg"
          alt=""
        />
        <p>Alumini</p>
      </div>

      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions