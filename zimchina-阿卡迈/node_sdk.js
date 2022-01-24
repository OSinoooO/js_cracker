const initCycleTLS = require('cycletls');
// Typescript: import initCycleTLS from 'cycletls';

(async () => {
    // Initiate CycleTLS
    const cycleTLS = await initCycleTLS();

    // Send request
    const response = await cycleTLS("https://www.zimchina.com/tools/track-a-shipment?consnumber=GSLU2044513", {
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "zh-CN,zh;q=0.9",
            "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "bm_sz=503515368AEAC1F78CFF95B16477900F~YAAQrlw6F2nmB3p+AQAA3Ogbiw5CNwydsj4hkgN/i6snhQvI6RFvEREBfzella9vdCwVf9IqGd9PbLjHuAo42q052oztO2ewaRIclSRoUB8eEtHZJ5L7OKBC9CJCnZSviUeREGpBzr6mmkGfsszkxFmmawCphiUGzVl5QDGmhjxgXJw2MVeNzqWIFqiXI+KATebNtimRWdwqMdLV80ED18pwAOADcvoKv7H2ChAw+7Dne6NsLCSYLd/Fa7QIAiPskn4Mdl9iAeAQSSCPOzE/xJGvLjdGplUIp0wc4rUd1UdkQRb0Vg==~4273463~4342082; dtCookie=v_4_srv_1_sn_66B2B037AA919DB9F12CC70EF3094D3E_perc_100000_ol_0_mul_1_app-3A25bc709b3f2362bb_0; uniqueUserId=12990844-cfbe-48b8-b797-171e3652ffd2; ak_bmsc=EA1F244F843036FC17B19F65D1A6C15A~000000000000000000000000000000~YAAQrlw6F+jmB3p+AQAATAAciw6AXgEdOSuQkxsxYMdG4iTKky0zzk6D48ucqQOsMmUI2y3YD8c86KLT+BheOE0AIkVWeMnY50QejW1UcbaHecZ62HDa23TCpK33y2MP4o8WeE+JhGXzRl4k4KJPlvXJdHuFLIh2DQ+BkG3crGzXAZfLkLNsW94OxgHO4zei9deajgCTJnuUgOH6bSE9KBFQ1rObwFdvDwHHEUsX8W6qXRwluhpuEiTKeW6hzmUlMvDJXHa+C9m4lh4bEZu9BBpnUAVZqSMrhBLj1T42bBA1lTsZO0MiXfX0F0F5bgfLf0O9BeR9rcBtW8k5FUmQZLZ47ZQTYzwHBmwDbKBdh7LhRJqBitgkuj+pspvnc3xR/+niZj/107qXtgqTgWTrLzSuEoPXfyyrVS8sBQiAUwwT0el3X95ahMBrjpR03c+OyBmhlDPlCd+K6oxS9Edq94o6ED9H3wgDOKC3t/NhhUmDFvda12/W4lF6BiFx1t4=; stg_traffic_source_priority=1; stg_externalReferrer=; country=US; _cls_v=2141a6e7-0729-4cf2-bcc9-2ddc8a8d92c5; _cls_s=5cbdf225-738e-420a-b111-f431daadfa78:0; _ga=GA1.2.1323152438.1643011374; _gid=GA1.2.128085228.1643011374; _fbp=fb.1.1643011374843.1201851205; _pk_ses.923228e7-d119-45eb-a025-e4d1b1af6e1b.2c82=*; outbrain_cid_fetch=true; OptanonAlertBoxClosed=2022-01-24T08:02:58.603Z; stg_fired_6b5a88b5-00e1-4b83-91a1-53cd9b62c508_9ab2208a-16d0-451b-8810-d9c1348eff19=Mon%2C%2024%20Jan%202022%2008:03:52%20GMT; AKA_A2=A; PHPSESSID=cgmomf43qwg3dhaxefzhwaqn; rxVisitor=1643011434621DV5KKCTR2R9NLH3AUKPHAKV4MD5FUM2I; dtLatC=6; OptanonConsent=isGpcEnabled=0&datestamp=Mon+Jan+24+2022+16%3A04%3A17+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=6.21.0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&geolocation=%3B&AwaitingReconsent=false; bm_sv=54219D55E52C0549103315A543A855B0~hqiYRmjGRpUUi3P7ZeBiNNceGmoWAYcIAFM75woZzW14MqGfj78klYUxLGVtLIHQarb/30d2iemVJcM/1hVhwTqjc0elm+ojz4u/BRXcu/6mnXqktNVzVS/a7frTm+7Lh+E2QAGWMSVDdexI293xa9XLDv/2swz9y1gKRqYb3Ck=; _abck=347305BCFE4CB1BC31643DAB9B2008B7~-1~YAAQjDJ8aGbkFnp+AQAAj9kfiwfOd7UNgAT4dlEc3I6fP1PebMzwYZn4GFbbHJNYJ40dkaoBiwAesy2vm9MM5YYeViOMo6nsY20v/P/y/YYPA8wgz7QH/1ix+umT4rS+NaxVxp3kqerpZ39WeowLdObfV8r/thIRAYnefIBraJfoKBuLVEJ4yxTmzjq+Lu0ZKzNr+NYxYQIbFOIzWi/Ny0fpdehiVNuzSmNDoCppNkCn+Flr3utYxVH7Tj0ns5c1WWEElmFyQiMLxMwZHyV0XhuI8Xj6IKbTLFqlgJujNTeJt0/8eZ4Hs093Ck1u2Q6M/xZxuboi6Iqc/b5snUT3F5WzRuNJVgNhgf/kJw3FICqngKzvxgZDzs07xgpR1GjU9bmWS6ryRgzvA5HUbVjnH3bDrje1qtVrE68=~0~-1~-1; stg_last_interaction=Mon%2C%2024%20Jan%202022%2008:07:24%20GMT; stg_returning_visitor=Mon%2C%2024%20Jan%202022%2008:07:24%20GMT; rxvt=1643013452479|1643011434632; dtPC=1$211453588_570h73vRGHPRWLFJFAPOSCPJDQPEPWAAMSCOFAK-0e0; _pk_id.923228e7-d119-45eb-a025-e4d1b1af6e1b.2c82=9e09bd878b5d82bf.1643011375.1.1643011653.1643011375.; dtSa=true%7CC%7C-1%7CTrack%20Shipment%7C-%7C1643011652550%7C211453588_570%7Chttps%3A%2F%2Fwww.zimchina.com%2Ftools%2Ftrack-a-shipment%3Fconsnumber%3DGSLU2044513%7CTrack%20Shipment%5Ec%20Container%20Tracing%20%5Ep%20ZIM%7C%7C%7C; RT=\"sl=3&ss=1643011367027&tt=15405&obo=2&bcn=%2F%2F17de4c1b.akstat.io%2F&sh=1643011468269%3D3%3A2%3A15405%2C1643011452688%3D2%3A2%3A0%2C1643011391460%3D1%3A1%3A0&dm=www.zimchina.com&si=a38d2a5e-e0b4-4414-bd11-bda93f2985da&ld=1643011468270&nu=&cl=1643011652745&r=https%3A%2F%2Fwww.zimchina.com%2Ftools%2Ftrack-a-shipment%3F4516b5a9bf5b3e324541041c3fd77c09&ul=1643011652892\"",
            "Referer": "https://www.zimchina.com/tools/track-a-shipment?consnumber=GSLU2044513",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: null,
        // method: "GET",
        ja3: '771,56026-4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-21,2570-29-23-24,0',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
    }, 'get');

    var result = response.body;
    console.log(result);
    cycleTLS.exit();
})();