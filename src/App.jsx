import {useEffect, useState} from 'react'
import styles from './index.module.css'
import useDimensions from "react-use-dimensions";
import {Row, Col, Collapse, Carousel, BackTop} from 'antd'
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
    const [buttonStatus, setButtonStatus] = useState(false)

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

    const onFormLayoutChange = async() => {
        console.log('xxx')
        try {
            await form.validateFields()
            setButtonStatus(true)
        }
        catch(e) {
            console.log('xy')
            console.log(e)
            setButtonStatus(!e.errorFields.length)
        }
    }

  return (

      <div className={styles.main} style={{zoom: `${vector}`}}>
          <BackTop />
          <div className={styles.bannerA}>
              <img src="./assets/images/A.png" style={{objectFit: 'cover', width: '100%'}}/>
              <div className={styles.insert}>
                  <Form
                      layout='vertical'
                      form={form}
                      //onFinish={handleFinish}
                      onValuesChange={onFormLayoutChange}
                  >
                      <Form.Item name="nombre"
                         rules={[
                             {
                                 required: true,
                                 type: "string",
                                 pattern: new RegExp(/^([a-z]|[A-Z]| |??|??|??|??|??|??|??|??|??|??|??|??)+$/),
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
                                 pattern: new RegExp(/^(059|06[0-9]|07[0-9]|08[0-9]|09[0-9]|1[0-9][0-9]|20[0-1][0-9])[0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/),
                                 message: "Formato de c??digo incorrecto!"
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
                                         pattern: new RegExp(/^9[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/),
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
                          <Button htmlType="submit" size='large' block type="primary" disabled={!buttonStatus}>ENVIAR</Button>
                      </Form.Item>
                  </Form>
              </div>
          </div>
          <div className={styles.bannerB}>
              <img src="./assets/images/B.png" style={{objectFit: 'cover', width: '100%'}}/>
          </div>
          <div className={styles.bannerC}>
              <img src="./assets/images/C.png" style={{objectFit: 'cover', width: '100%'}}/>
              <div className={styles.insertC}>
                  <Collapse accordion
                            ghost
                            expandIcon={({ isActive }) => <CaretRightOutlined style={{color: 'pink'}} rotate={isActive ? 90 : 0} />}
                  >

                      <Panel header="Facultad de Ciencias Empresariales y Educaci??n" key="1">
                          <ul>
                              <li><a href="./assets/documents/Brochure_ ADMINISTRACI??N Y NEGOCIOS INTERNACIONALES.pdf">Administraci??n y Negocios Internacionales</a></li>
                              <li><a href="./assets/documents/Brochure_ CIENCIAS CONTABLES Y FINANCIERAS.pdf">Ciencias Contables y Financieras</a></li>
                              <li><a href="./assets/documents/Brochure_TURISMO.pdf">Turismo, Hoteler??a y Gastronom??a</a></li>
                              <li><a href="./assets/documents/Brochure_ CIENCIAS DE LA COMUNICACI??N.pdf">Ciencias de la Comunicaci??n</a></li>
                              <li><a href="./assets/documents/Brochure_ CIENCIAS DEL DEPORTE.pdf">Ciencias del Deporte</a></li>
                              <li><a href="./assets/documents/Brochure_ EDUCACI??N.pdf">Educaci??n</a></li>
                          </ul>
                      </Panel>
                      <Panel header="Facultad de Derecho y Ciencias Pol??ticas" key="2">
                          <ul>
                              <li><a href="./assets/documents/Brochure_DERECHO.pdf">Derecho</a></li>
                          </ul>
                      </Panel>443
                      <Panel header="Facultad de Ingenier??a y Arquitectura" key="3">
                              <ul>
                                  <li><a href="./assets/documents/Brochure_ INGENIER??A CIVIL.pdf">Ingenier??a Civil</a></li>
                                  <li><a href="./assets/documents/Brochure_ INGENIER??A AMBIENTAL.pdf">Ingenier??a Ambiental</a></li>
                                  <li><a href="./assets/documents/Brochure_ INGENIER??A DE MINAS.pdf">Ingenier??a de Minas</a></li>
                                  <li><a href="./assets/documents/Brochure_ INGENIER??A MEC??NICA.pdf">Ingenier??a Mec??nica</a></li>
                                  <li><a href="./assets/documents/Brochure_ INGENIER??A DE SISTEMAS E INFORM??TICA.pdf">Ingenier??a de Sistemas e Inform??tica</a></li>
                                  <li><a href="./assets/documents/Brochure_ INGENIER??A ELECTR??NICA Y TELECOMUNICACIONES.pdf">Ingenier??a Electr??nica y Telecomunicaciones</a></li>
                                  <li><a href="./assets/documents/Brochure_ INGENIER??A INDUSTRIAL.pdf">Ingenier??a Industrial</a></li>
                              </ul>
                      </Panel>
                      <Panel header="Facultad de Ciencias Agropecuarias" key="4">
                          <ul>
                              <li>Medicina Veterinaria</li>
                          </ul>
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

                      <Panel header="Facultad de Medicina Humana y Ciencias de la Salud" key="1">
                          <ul>
                              <li>Estomatolog??a</li>
                              <li>Enfermer??a</li>
                              <li>Nutrici??n Humana</li>
                              <li>Psicolog??a Humana</li>
                              <li>Gerontolog??a</li>
                              <li>Medicina Humana</li>
                              <li>Farmacia y Bioqu??mica</li>
                              <li>Obstetricia</li>
                              <li>Tecnolog??a M??dica</li>
                          </ul>
                      </Panel>
                      <Panel header="Escuela Profesional de Arquitectura" key="2">
                          <ul>
                              <li>Arquitectura</li>
                          </ul>
                      </Panel>
                  </Collapse>
              </div>

          </div>
          <div className={styles.bannerB}>
              <img src="./assets/images/E.png" style={{objectFit: 'cover', width: '100%'}}/>
              <div className={styles.carousel}>
                  <Carousel dots={false} autoplay>
                      <div>
                          <div className={styles.carouselitem}>
                              <div className={styles.video}></div>
                              <div className={styles.text1}>Pedro Costa</div>
                              <div className={styles.text2}>Estudiante de Ingenier??a</div>
                          </div>
                          <div className={styles.carouselitem}>
                              <div className={styles.video}></div>
                              <div className={styles.text1}>Ana Flores</div>
                              <div className={styles.text2}>Estudiante de Medicina Humana</div>
                          </div>
                          <div className={styles.carouselitem}>
                              <div className={styles.video}></div>
                              <div className={styles.text1}>Carlos Esquivel</div>
                              <div className={styles.text2}>Estudiante de Arquitectura</div>
                          </div>
                      </div>
                      <div>
                          <div className={styles.carouselitem}>
                              <div className={styles.video}></div>
                              <div className={styles.text1}>Pedro Costa</div>
                              <div className={styles.text2}>Estudiante de Ingenier??a</div>
                          </div>
                          <div className={styles.carouselitem}>
                              <div className={styles.video}></div>
                              <div className={styles.text1}>Ana Flores</div>
                              <div className={styles.text2}>Estudiante de Medicina Humana</div>
                          </div>
                          <div className={styles.carouselitem}>
                              <div className={styles.video}></div>
                              <div className={styles.text1}>Carlos Esquivel</div>
                              <div className={styles.text2}>Estudiante de Arquitectura</div>
                          </div>
                      </div>
                      <div>
                          <div className={styles.carouselitem}>
                              <div className={styles.video}></div>
                              <div className={styles.text1}>Pedro Costa</div>
                              <div className={styles.text2}>Estudiante de Ingenier??a</div>
                          </div>
                          <div className={styles.carouselitem}>
                              <div className={styles.video}></div>
                              <div className={styles.text1}>Ana Flores</div>
                              <div className={styles.text2}>Estudiante de Medicina Humana</div>
                          </div>
                          <div className={styles.carouselitem}>
                              <div className={styles.video}></div>
                              <div className={styles.text1}>Carlos Esquivel</div>
                              <div className={styles.text2}>Estudiante de Arquitectura</div>
                          </div>
                      </div>
                  </Carousel>
            </div>
          </div>
          <div className={styles.bannerB}>
              <img src="./assets/images/nets.png" style={{objectFit: 'cover', width: '100%'}}/>
          </div>
      </div>
  )
}

export default App
