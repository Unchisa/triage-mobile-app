export const QUESTIONS = [
    {
        name: 'แพ้ยา',
        description: 'แพ้อาหาร , สัตว์ต่อย , ภูมิแพ้ ',
        image: 'assets/imgs/pill.png',
        color: '#CA1F13',
        questions: [
            {
                question: '<b>ไม่รู้สึกตัว</b> หรือ <b>ไม่หายใจ</b> หรือ <b>ไม่มีชีพจร</b>',
                code: "2วิกฤต1",
                description: "Cadiac arrest โดยมีอาการ ไม่รู้สึกตัว หรือ ไม่หายใจ หรือ ไม่มีชีพจร",
                level: 'ผู้ป่วยฉุกเฉินวิกฤต',
                color: '#D72732',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',
            },
            {
                question: "มีอาการ<b>บวม</b> บริเวณใบหน้า ปาก และลิ้น รวมกับมีอาการ<b>หายใจเสียงดัง</b> หรือ <b>Stridor</b>",
                code: "2วิกฤต2",
                description: "Airway obstruction เช่น มีอาการบวมบริเวณใบหน้า ปาก ลิ้น ร่วมกับมีอาการหายใจเสียงดัง หรือ Stridor เป็นต้น",
                level: 'ผู้ป่วยฉุกเฉินวิกฤต',
                color: '#D72732',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',

            },
            {
                question: " <b>พูดได้สั้นๆ</b> หรือ <b>หายใจมีเสียง</b> หรือ <b>ซีด</b> และ <b>มีเหงื่อท่วม</b> หรือ <b>หายใจเร็ว</b> หรือ ใช้กล้ามเนื้อ <b>ช่วยหายใจ</b>",
                code: "2วิกฤต3",
                description: "Servere respiratory distress เช่น ต้องลุกนั่ง พิงผนังหรือยืนเพื่อให้หายใจได้ พูดได้เพียงประโยคสั้นๆ หายใจมีเสียงดัง หายใจเสียงหวีด ซีดและเหงื่อท่วมตัว หายใจเร็ว แรง และลึก ใช้กล้ามเนื้อช่วยหายใจ",
                level: 'ผู้ป่วยฉุกเฉินวิกฤต',
                color: '#D72732',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',

            },
            {
                question: "<b>Shock</b> โดยมีอาการอย่างน้อย 2 ข้อ <b>เหงื่อท่วมตัว</b> <b>ซีดและผิวเย็น</b> <b>หมดสติชั่ววูบ</b> <b>เกือบหมดสติชั่ววูบเมื่อนั่งหรือยืน</b>",
                code: "2วิกฤต4",
                description: "Shock โดยมีอาการ อย่างน้อย 2 ข้อ เหงื่อท่วมตัว ซีดและผิวเย็น หมดสติชั่ววูบ/เกือบหมดสติชั่ววูบเมื่อนั่ง/ยืน ร่วมกับ \nSBP < 90 mmHg, MAP < 65 mmHg ในผู้ใหญ่/เด็กโต(>10ปี) หรือ\n SBP <70+(อายุx2) ในเด็กอายุ 1-10 ปี หรือ\n SBP <70 ในเด็กอายุ <1 ปี\n",
                level: 'ผู้ป่วยฉุกเฉินวิกฤต',
                color: '#D72732',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',

            },
            {
                question: " <b>Coma</b> หรือ <b>Semi-Coma</b> หรือ <b>GCS น้อยกว่าเท่ากับ 8</b> หรือ <b>กำลังชักเมื่อแรกรับที่จุดคัดแยก</b> ",
                code: "2วิกฤต5",
                description: "Coma/semi-coma หรือ GCS <= 8 หรือกำลังชักเมื่อแรกรับที่จุดคัดแยก",
                level: 'ผู้ป่วยฉุกเฉินวิกฤต',
                color: '#D72732',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',

            },
            {
                question: "อายุ <b>> 8</b> ปี : HR <b>> 100</b>, RR <b>> 20</b><br/>อายุ <b>> 3-8 ปี</b> : HR <b>> 140</b>, RR > <b>30</b><br/>อายุ <b>> 3</b>  เดือน - <b>3</b> ปี: HR <b>> 160</b>, RR <b> > 40</b><br/>อายุ <b>< 3</b> เดือน - <b>3</b> ปี : HR <b>> 180</b>, RR <b>> 40</b><br/>",
                code: "2เร่งด่วน1",
                description: "อายุ > 8 ปี : HR > 100, RR > 20\nอายุ > 3-8 ปี : HR > 140, RR > 30\nอายุ > 3 เดือน - 3 ปี : HR > 160,RR > 40\nอายุ < 3 เดือน - 3 ปี : HR > 180, RR > 40\n",
                level: 'ผู้ป่วยฉุกเฉินเร่งด่วน',
                color: '#F7E744',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',

            },
            {
                question: "Alteration of conciousness <b>โดยมีอาการซึมลง</b> เมื่อเทียบกับระดับความรู้สึกเดิม",
                code: "2เร่งด่วน2",
                description: "Alteration of conciousness โดยมีอาการซึมลง เมื่อเทียบกับระดับความรู้สึกเดิม",
                level: 'ผู้ป่วยฉุกเฉินเร่งด่วน',
                color: '#F7E744',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',

            },
            {
                question: "ปวดมาก กระสับกระส่าย ระดับ <b>Pain scale</b> มากกว่าเท่ากับ 7",
                code: "2เร่งด่วน3",
                description: "ปวดมาก กระสับกระส่าย ระดับ Pain scale มากกว่าเท่ากับ 7",
                level: 'ผู้ป่วยฉุกเฉินเร่งด่วน',
                color: '#F7E744',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',

            },
            {
                question: "มีผื่นขึ้น ร่วมกับมีอาการปาก ใบหน้า ลิ้นบวม หายใจขัด ปวดท้อง อาเจียน ถ่ายเหลว หรือเคยมีอาการรุนแรงมาก่อน",
                code: "2เร่งด่วน9",
                description: "มีผื่นหลังได้รับสิ่งสัมผัสที่สงสัยว่าแพ้ อาจร่วมกับมีอาการปาก ใบหน้า ลิ้นบวม หรือมีอาการหายใจขัด หรือมีผื่นที่ร่วมกับอาการปวดท้อง อาเจียน ถ่ายเหลว หรือมีผื่นลุกลามทั่วตัว หรือเคยมีอาการแพ้รุนแรงมาก่อน เป็นต้น หรืออื่นๆ ตามดุลยพินิจของผู้คัดแยก",
                level: 'ผู้ป่วยฉุกเฉินเร่งด่วน',
                color: '#F7E744',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',

            },
            {
                question: "มีภาวะเฉียบพลันไม่รุนแรง สามารถรอปฏิบัติการแพทย์ได้ช่วงระยะหนึ่งหรือสามารถเดินทางได้ด้วยตนเอง ",
                code: "2ไม่รุนแรง9",
                description: "บุคคลซึ่งได้รับบาดเจ็บหรือมีอาการป่วยเฉียบพลันไม่รุนแรง อาจรอรับปฏิบัติการแพทย์ได้ช่วงระยะหนึ่งหรือเดินทางไปรับบริการสาธารณสุขด้วยตนเองได้แต่จำเป็นต้องใช้ทรัพยากร และหากปล่อยไว้นานเกินเวลาอันควรแล้วจะทำให้บาดเจ็บหรืออาการของผู้ป่วยฉุกเฉินนั้นรุนแรงขึ้นหรือเกิดภาวะแทรกซ้อนขึ้นได้ หรือตามดุลยพินิจของผู้คัดแยก",
                level: 'ผู้ป่วยฉุกเฉินไม่รุ,นแรง',
                color: '#2CA353',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',

            },
            {
                question: "เจ็บป่วยแต่ไม่ใช่ผู้ป่วยฉุกเฉิน สามารถรอการบริการสาธารณสุขในเวลาปกติได้",
                code: "2ทั่วไป9",
                description: "บุคคลที่เจ็บป่วยแต่ไม่ใช่ผู้ป่วยฉุกเฉิน ซึ่งอาจรอรับหรือเลือกสรรการบริการสาธารณสุขในเวลาปกติ โดยไม่ก่อให้เกิดอาการที่รุนแรงขึ้นหรือภาวะแทรกซ้อนตาม หรือตามดุลยพินิจของผู้คัดแยก",
                level: 'ผู้ป่วยทั่วไป',
                color: '#FFFFFF',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',

            },
            {
                question: "มารับบริการสารธารณสุขเพื่อผู้อื่น ",
                code: "2อื่น9",
                description: "บุคคลที่มารับบริการสาธารณะสุขหรือบริการเพื่อผู้อื่น โดยไม่จำเป็นต้องใช้ทรัพยากร หรือตามดุลยพินิจของผู้คัดแยก",
                level: 'ผู้ป่วยทั่วไป',
                color: '#E9E8E6',
                image: 'assets/imgs/pill.png',
                name: 'แพ้ยา',
            },
        ]
    },
    {
        name: 'ได้รับสารพิษ',
        description: 'ยาเกินขนาด',
        image: 'assets/imgs/poison.png',
        color: '#FF85A7',
        questions: [
            {
                question: "<b>ไม่รู้สึกตัว</b> หรือ <b>ไม่หายใจ</b> หรือ <b>ไม่มีชีพจร</b>",
                code: "2วิกฤต1"
            },
            {
                question: "มีอาการ<b>บวม</b> บริเวณใบหน้า ปาก และลิ้น รวมกับมีอาการ<b>หายใจเสียงดัง</b> หรือ <b>Stridor</b>",
                code: "2วิกฤต2"
            },
            {
                question: " <b>พูดได้สั้นๆ</b> หรือ <b>หายใจมีเสียง</b> หรือ <b>ซีด</b> และ <b>มีเหงื่อท่วม</b> หรือ <b>หายใจเร็ว</b> หรือ ใช้กล้ามเนื้อ <b>ช่วยหายใจ</b>",
                code: "2วิกฤต3"
            }
        ]
    }
]
