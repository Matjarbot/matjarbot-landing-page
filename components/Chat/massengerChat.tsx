
import React, { useRef, useEffect } from 'react';



  const MassengerChat = () => {

    const MessengerRef:any = useRef();
    useEffect(() => {
        MessengerRef.current.setAttribute('page_id', '117267354612339');
        MessengerRef.current.setAttribute('attribution', 'biz_inbox');
    
        (window as any).fbAsyncInit = function () {
          (window as any).FB.init({
                xfbml: true,
                version: 'v16.0',
            });
        };
        (function (d, s, id) {
            var js :any,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s) ;
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode!.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }, []);
    return (
        <>

            <div id="fb-root"></div>
            <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat"></div>
        </>
    );
    }; 
    export default MassengerChat;