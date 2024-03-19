import "./globals.css";
import { Inter } from "next/font/google";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "مگ نتی فای |‌ Magnitify",
  description: "به روز باشید و زندگی خود را بهبود بخشید",
};


 const header = (
    <>
 <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n){e.yektanetAnalyticsObject=n,e[n]=e[n]||function(){e[n].q.push(arguments)},e[n].q=e[n].q||[];var a=t.getElementsByTagName("head")[0],r=new Date,c="https://cdn.yektanet.com/superscript/1tavFZLi/native-mangnify.vercel.app-36551/yn_pub.js?v="+r.getFullYear().toString()+"0"+r.getMonth()+"0"+r.getDate()+"0"+r.getHours(),s=t.createElement("link");s.rel="preload",s.as="script",s.href=c,a.appendChild(s);var l=t.createElement("script");l.async=!0,l.src=c,a.appendChild(l)}(window,document,"yektanet");
            `,
          }}
        />
        <script 
          src="https://s1.mediaad.org/serve/77542/retargeting.js"
          async />

    </>
  );

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa">
    {header}
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <div className="flex-grow overflow-y-auto ">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
        </div>
      </body>
    </html>
  );
}
