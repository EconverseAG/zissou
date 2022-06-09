import {useEffect} from 'react';

export default function Huggy() {
  useEffect(() => {
    var $_Huggy = { 
      defaultCountry: '+55', 
      uuid: 'fcfb57f8-9b4d-4bd7-85cf-d9b77913e12c', 
      company: '321090' };
      
      (function(i,s,o,g,r,a,m){ 
        i[r] = {
          context: {
            id:'95abf1bf62aac9493f749c8042ca60d9'
          }
        };
        a = o;
        o = s.createElement(o);
        o.async = 1;
        o.src = g;
        m = s.getElementsByTagName(a)[0];
        m.parentNode.insertBefore(o,m);
      })(window,document,'script','https://js.huggy.chat/widget.min.js','pwz');
  }, []);

  return null;
}
