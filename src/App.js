import React from "react";
import "./App.css";
function App() {
  return (
    <div>
      <div
        className="App1"
        style={{
          width: "100%",
          height: 50,
          flexDirection: "row",
          display: "flex",
          borderBottomColor: "blue",
          borderWidth: 2,
        }}
      >
        <div
          className="App"
          style={{
            width: "40%",
            justifyContent: "space-around",
            display: "flex",
            flexDirection: "row",
            borderBottomWidth: 9,
            borderBottomColor: "red",
          }}
        >
          <p>درخواست مشاوره</p>
          <p>بلاگ</p>
          <p>درباره مکین</p>
          <p>بوت کمپ</p>
        </div>
        <div
          style={{
            width: "20%",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            marginTop: 100,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "pink",
              position: "absolute",
            }}
          ></div>
        </div>
        <div
          className="App"
          style={{
            width: "40%",
            justifyContent: "space-around",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p>درخواست همکاری</p>
          <p>ثبت نام دوره</p>
          <p>دوره ها</p>
          <p>صفحه اصلی</p>
        </div>
      </div>
    </div>
  );
}

export default App;
