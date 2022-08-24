import {useEffect, useState} from 'react'
import styles from './index.module.css'
import useDimensions from "react-use-dimensions";
import {Row, Col, Collapse} from 'antd'
import 'antd/dist/antd.css'
import {Button, Form, Input, Radio} from 'antd';
import "@fontsource/bebas-neue"
//import "@fontsource/fira-sans"
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });


    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}


function App() {
    const size = useWindowSize();
    const [form] = Form.useForm();


    console.log(size)

    let  vector  = (size.width > 1500)?0:(size.width - 1500)/1500
    vector = 1 + vector
    console.log(vector)
    //
    // let zoom = (window.innerWidth - 1550 > 0)?1:(1550 - window.innerWidth )/1550;
    // zoom = (zoom == 1)?1:1+zoom*2
    // // zoom = (zoom > 1)?zoom:1
    // // console.log('zoom')
    // // console.log('iw: ' + window.innerWidth)
    // console.log(zoom)

    const handleFinish = (e) => {
        console.log('xxx')
        console.log(e)
    }

  return (

      <div className={styles.main} style={{zoom: `${vector}`}}>
          <div className={styles.bannerA}>
              <img src="./assets/images/A.png" style={{objectFit: 'cover', width: '100%'}}/>
              <div className={styles.insert}>
                  <Form
                      layout='vertical'
                      form={form}
                      onFinish={handleFinish}
                      //onValuesChange={onFormLayoutChange}
                  >
                      <Form.Item name="nombre"
                         rules={[
                             {
                                 required: true,
                                 type: "string",
                                 pattern: new RegExp(/([a-z]|[A-Z]| |á|é|í|ó|ú|Á|É|Í|Ó|Ú|ñ|Ñ])/g),
                                 message: "Formato de nombres incorrecto!"
                             }
                         ]}
                     >
                        <Input size='large' placeholder="Nombres"/>
                      </Form.Item>
                      <Form.Item name="codigo"
                         rules={[
                             {
                                 required: true,
                                 type: "string",
                                 pattern: new RegExp(/(059|06[0-9]|07[0-9]|08[0-9]|09[0-9]|1[0-9][0-9]|20[0-1][0-9])[0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g),
                                 message: "Formato de código incorrecto!"
                             }
                         ]}
                      >
                      <Input size='large' placeholder="Codigo"/>
                      </Form.Item>
                      <Form.Item name="celular"
                                 rules={[
                                     {
                                         required: true,
                                         type: "string",
                                         pattern: new RegExp(/9[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g),
                                         message: "Formato de celular incorrecto!"
                                     },
                                 ]}
                      >
                          <Input size='large' placeholder="Celular"/>
                      </Form.Item>
                      <Form.Item name="correo"
                                 rules={[
                                     {
                                         required: true,
                                         type: "email",
                                         message: "Formato de correo incorrecto!"
                                     },
                                 ]}
                      >
                          <Input size='large' placeholder="Correo Personal"/>
                      </Form.Item>
                      <Form.Item>
                          <Button htmlType="submit" size='large' block type="primary">ENVIAR</Button>
                      </Form.Item>
                  </Form>
              </div>
          </div>
          <div className={styles.bannerB}>
              <img src="./assets/images/B.png" style={{objectFit: 'cover', width: '100%'}}/>
          </div>s
          <div className={styles.bannerC}>
              <img src="./assets/images/C.png" style={{objectFit: 'cover', width: '100%'}}/>
              <div className={styles.insertC}>
                  <Collapse accordion
                            ghost
                            expandIcon={({ isActive }) => <CaretRightOutlined style={{color: 'pink'}} rotate={isActive ? 90 : 0} />}
                  >

                      <Panel header="This is panel header 1" key="1">
                          <p>A</p>
                      </Panel>
                      <Panel header="This is panel header 2" key="2">
                          <p>B</p>
                      </Panel>
                      <Panel header="This is panel header 3" key="3">
                          <p>C</p>
                      </Panel>
                  </Collapse>
              </div>
          </div>
          <div className={styles.bannerD}>
              <img src="./assets/images/D.png" style={{objectFit: 'cover', width: '100%'}}/>
              <div className={styles.insertD}>
                  <Collapse accordion
                            ghost
                            expandIcon={({ isActive }) => <CaretRightOutlined style={{color: 'pink'}} rotate={isActive ? 90 : 0} />}
                  >

                      <Panel header="This is panel header 1" key="1">
                          <p>A</p>
                      </Panel>
                      <Panel header="This is panel header 2" key="2">
                          <p>B</p>
                      </Panel>
                      <Panel header="This is panel header 3" key="3">
                          <p>C</p>
                      </Panel>
                  </Collapse>
              </div>

          </div>
          <div className={styles.bannerB}>
              <img src="./assets/images/E.png" style={{objectFit: 'cover', width: '100%'}}/>
          </div>
          <div className={styles.bannerB}>
              <img src="./assets/images/nets.png" style={{objectFit: 'cover', width: '100%'}}/>
          </div>
      </div>
  )
}

export default App
