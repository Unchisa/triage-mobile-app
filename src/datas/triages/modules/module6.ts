import { level, questionType, choiceType } from "../meta";

const result = {
    red1: {
        code: '6 แดง 1',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่',
                    descriptions: [
                        '<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป'
                    ]

                },
                {
                    title: '2. นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง',
                    descriptions: [
                        ' พร้อมบอกว่าญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆ ก่อนนะค่ะ กระผม/ดิฉัน จะบอกคุณว่า ต้องทำไรค่ะ'
                    ]
                },
                {
                    title: '3. สอนวิธีปั๊มหัวใจ',
                    descriptions: [
                        'ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย',
                        'ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา',
                        'ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเมื่อยล้า สามารถเปลี่ยนคนได้)'
                    ]
                }
            ],
            notes: [
                '1. ให้ทำการปั๊มหัวใจไปเรื่อยๆ จนกว่ารถ รพ. จะไปถึง',
                '2. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย',
                '3. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที',
            ]
        },
    },
    red2: {
        code: '6 แดง 6',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่',
                    descriptions: [
                        '<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป'
                    ]

                },
                {
                    title: '2. นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง',
                    descriptions: [
                        ' พร้อมบอกว่าญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆ ก่อนนะค่ะ กระผม/ดิฉัน จะบอกคุณว่า ต้องทำไรค่ะ'
                    ]
                },
                {
                    title: '3. สอนวิธีปั๊มหัวใจ',
                    descriptions: [
                        'ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย',
                        'ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา',
                        'ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเมื่อยล้า สามารถเปลี่ยนคนได้)'
                    ]
                }
            ],
            notes: [
                '1. ให้ทำการปั๊มหัวใจไปเรื่อยๆ จนกว่ารถ รพ. จะไปถึง',
                '2. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย',
                '3. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที',
            ]
        },
    },
    yellow1: {
        code: '6 เหลือง 1',
        level: level.yellow,
        advise: {
            contents: [
                {
                    title: '1. มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่',
                    descriptions: [
                        '<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป'
                    ]

                },
                {
                    title: '2. นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง',
                    descriptions: [
                        ' พร้อมบอกว่าญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆ ก่อนนะค่ะ กระผม/ดิฉัน จะบอกคุณว่า ต้องทำไรค่ะ'
                    ]
                },
                {
                    title: '3. สอนวิธีปั๊มหัวใจ',
                    descriptions: [
                        'ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย',
                        'ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา',
                        'ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเมื่อยล้า สามารถเปลี่ยนคนได้)'
                    ]
                }
            ],
            notes: [
                '1. ให้ทำการปั๊มหัวใจไปเรื่อยๆ จนกว่ารถ รพ. จะไปถึง',
                '2. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย',
                '3. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที',
            ]
        },
    },
    yellow4: {
        code: '6 เหลือง 4',
        level: level.yellow,
        advise: {
            contents: [
                {
                    title: '1. มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่',
                    descriptions: [
                        '<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป'
                    ]

                },
                {
                    title: '2. นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง',
                    descriptions: [
                        ' พร้อมบอกว่าญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆ ก่อนนะค่ะ กระผม/ดิฉัน จะบอกคุณว่า ต้องทำไรค่ะ'
                    ]
                },
                {
                    title: '3. สอนวิธีปั๊มหัวใจ',
                    descriptions: [
                        'ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย',
                        'ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา',
                        'ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเมื่อยล้า สามารถเปลี่ยนคนได้)'
                    ]
                }
            ],
            notes: [
                '1. ให้ทำการปั๊มหัวใจไปเรื่อยๆ จนกว่ารถ รพ. จะไปถึง',
                '2. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย',
                '3. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที',
            ]
        },
    },
    yellow8: {
        code: '6 เหลือง 8',
        level: level.yellow,
        advise: {
            contents: [

            ],
            notes: [

            ]
        }
    },
};

const questions = [
    {
        name: 'พิจารณาไม่ใช้เนื่องจากอย่างไรก็ตาม ก็จะส่งหน่วยแน่นอน',
        type:questionType.single,
        from: 0,
        choices: [
            {
                name: 'ส่งหน่วย ALS',
                type: choiceType.result,
                result : result.red1,
            }
        ]
    },
];

const module6 =  {
    name: 'หัวใจหยุดเต้น',
    description: 'หัวใจหยุดเต้น',
    module: 6,
    image: 'assets/imgs/heartbeat.png',
    color: '#CA1F13',
    questions: questions
};

export default module6;