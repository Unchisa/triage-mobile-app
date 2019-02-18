import { level, questionType, choiceType, criteriaType } from '../meta';

const result = {
	red1: {
		code: '25 แดง 1',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่',
					descriptions: [ '<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป' ],
				},
				{
					title: '2. นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง',
					descriptions: [
						' พร้อมบอกว่าญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆ ก่อนนะค่ะ กระผม/ดิฉัน จะบอกคุณว่า ต้องทำไรค่ะ',
					],
				},
				{
					title: 'สอนวิธีปั๊มหัวใจ',
					descriptions: [
						'ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย',
						'ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา',
						'ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเมื่อยล้า สามารถเปลี่ยนคนได้)',
					],
				},
			],
			notes: [
				'1. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย',
				'2. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที',
				'3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด',
			],
		},
	},
	red2: {
		code: '25 แดง 2',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. กรณีผู้ป่วยมีการบาดเจ็บของกระดูกต้นคอหรือไขสันหลัง ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [
						'ถ้าหากผู้ป่วยไม่มีอาการดังกล่าว แนะนำให้ผู้ป่วยนอนราบศีรษะสูง หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท',
					],
				},
				{
					title: '2. หากมีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '3. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด',
					descriptions: [],
				},
				{
					title: '5. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red3: {
		code: '25 แดง 3',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. กรณีผู้ป่วยมีการบาดเจ็บของกระดูกต้นคอหรือไขสันหลัง ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [
						'ถ้าหากผู้ป่วยไม่มีอาการดังกล่าว แนะนำให้ผู้ป่วยนอนราบศีรษะสูง หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท',
					],
				},
				{
					title: '2. หากมีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '3. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด',
					descriptions: [],
				},
				{
					title: '5. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red4: {
		code: '25 แดง 4',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. กรณีผู้ป่วยมีการบาดเจ็บของกระดูกต้นคอหรือไขสันหลัง ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [
						'ถ้าหากผู้ป่วยไม่มีอาการดังกล่าว แนะนำให้ผู้ป่วยนอนราบศีรษะสูง หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท',
					],
				},
				{
					title: '2. หากมีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '3. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด',
					descriptions: [],
				},
				{
					title: '5. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red5: {
		code: '25 แดง 5',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. กรณีผู้ป่วยมีการบาดเจ็บของกระดูกต้นคอหรือไขสันหลัง ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [
						'ถ้าหากผู้ป่วยไม่มีอาการดังกล่าว แนะนำให้ผู้ป่วยนอนราบศีรษะสูง หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท',
					],
				},
				{
					title: '2. หากกดห้ามเลือดไม่หยุด ให้ทำการขันชะเนาะ',
					descriptions: [
						'โดยใช้ผ้าที่หนาประมาณ 1 .5 นิ้ว รัดเหนือบาดแผลประมาณ 5-10 ซม. รัดจนกว่าเลือดจนจะหยุด หรือจนคลำชีพจรไม่ได้  พร้อมบันทึกเวลาที่ทำการขันชะเนาะไว้ด้วย',
					],
				},
				{
					title: '3. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำบนตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '5. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2. หากทำการขันชะเนาะเส้นแรกแล้วเลือดยังไม่หยุด สามารถรัดเพิ่มได้อีก 1 เส้น โดยรัดเหนือเส้นแรก 5-10 ซม. หลีกเลี่ยงบริเวณข้อต่อ เนื่องจากจะทำให้การขันชะเนาะมีประสิทธิภาพลดลง',
			],
		},
	},
	red6: {
		code: '25 แดง 6',
		level: level.red,
		advise: {
			contents: [],
			notes: [],
		},
	},
	red7: {
		code: '25 แดง 7',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. กรณีผู้ป่วยมีการบาดเจ็บของกระดูกต้นคอหรือไขสันหลัง ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [
						'ถ้าหากผู้ป่วยไม่มีอาการดังกล่าว แนะนำให้ผู้ป่วยนอนราบศีรษะสูง หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท',
					],
				},
				{
					title: '2. หากมีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '3 .อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำบนตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red8: {
		code: '25 แดง 8',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. กรณีผู้ป่วยมีการบาดเจ็บของกระดูกต้นคอหรือไขสันหลัง ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [
						'ถ้าหากผู้ป่วยไม่มีอาการดังกล่าว แนะนำให้ผู้ป่วยนอนราบศีรษะสูง หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท',
					],
				},
				{
					title: '2. หากมีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำบนตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red9: {
		code: '25 แดง 9',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. กรณีผู้ป่วยมีการบาดเจ็บของกระดูกต้นคอหรือไขสันหลัง ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [
						'ถ้าหากผู้ป่วยไม่มีอาการดังกล่าว แนะนำให้ผู้ป่วยนอนราบศีรษะสูง หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท',
					],
				},
				{
					title: '2. หากมีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '4.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำบนตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	yellow1: {
		code: '25 เหลือง 1',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. กรณีผู้ป่วยมีการบาดเจ็บของกระดูกต้นคอหรือไขสันหลัง ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [
						'ถ้าหากผู้ป่วยไม่มีอาการดังกล่าว แนะนำให้ผู้ป่วยนอนราบศีรษะสูง หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท',
					],
				},
				{
					title: '2. หากมีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำบนตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow2: {
		code: '25 เหลือง 2',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. กรณีผู้ป่วยมีการบาดเจ็บของกระดูกต้นคอหรือไขสันหลัง ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [
						'ถ้าหากผู้ป่วยไม่มีอาการดังกล่าว แนะนำให้ผู้ป่วยนอนราบศีรษะสูง หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท',
					],
				},
				{
					title: '2. หากมีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำบนตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow3: {
		code: '25 เหลือง 3',
		level: level.yellow,
		advise: {
			contents: [],
			notes: [],
		},
	},
	yellow4: {
		code: '25 เหลือง 4',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. กรณีผู้ป่วยมีการบาดเจ็บของกระดูกต้นคอหรือไขสันหลัง ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [
						'ถ้าหากผู้ป่วยไม่มีอาการดังกล่าว แนะนำให้ผู้ป่วยนอนราบศีรษะสูง หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท',
					],
				},
				{
					title: '2. หากมีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำบนตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow5: {
		code: '25 เหลือง 5',
		level: level.yellow,
		advise: {
			contents: [],
			notes: [],
		},
	},
	yellow8: {
		code: '25 เหลือง 8',
		level: level.yellow,
		advise: {
			contents: [],
			notes: [],
		},
	},
	yellow9: {
		code: '25 เหลือง 9',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. กรณีผู้ป่วยมีการบาดเจ็บของกระดูกต้นคอหรือไขสันหลัง ห้ามเคลื่อนย้ายผู้ป่วย',
					descriptions: [
						'ถ้าหากผู้ป่วยไม่มีอาการดังกล่าว แนะนำให้ผู้ป่วยนอนราบศีรษะสูง หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท',
					],
				},
				{
					title: '2. หากมีเลือดออก ให้ใช้ผ้าสะอาดกดห้ามเลือด',
					descriptions: [],
				},
				{
					title: '3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำบนตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	green1: {
		code: '25 เขียว 1',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green6: {
		code: '25 เขียว 6',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green7: {
		code: '25 เขียว 7',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'หากบาดเจ็บเล็กน้อย แนะนำให้ญาตินำผู้ป่วยรับการรักษาโรงพยาบาลใกล้บ้าน',
					descriptions: [],
				},
			],
			notes: [],
		},
	},
	green8: {
		code: '25 เขียว 8',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green9: {
		code: '25 เขียว 9',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	white1: {
		code: '25 ขาว 1',
		level: level.white,
		advise: {
			contents: [],
			notes: [],
		},
	},
	white2: {
		code: '25 ขาว 2',
		level: level.white,
		advise: {
			contents: [],
			notes: [],
		},
	},
};

const questions = [
	{
		name: 'ผู้แจ้งอยู่ใน/หยุดดูเหตุการณ์ หรือเพียงขับรถผ่าน',
		type: questionType.single,
		from: 0,
		choices: [
			{
				type: choiceType.question,
				name: 'อยู่ใน/หยุดดูเหตุการณ์',
				to: 1,
			},
			{
				type: choiceType.question,
				name: 'ขับรถผ่าน',
				to: 22,
			},
		],
	},
	{
		name: 'ผู้แจ้งคือใคร',
		type: questionType.single,
		from: 1,
		choices: [
			{
				type: choiceType.question,
				name: 'พลเมืองดี / อาสาสมัคร / ตำรวจ',
				to: 2,
			},
			{
				type: choiceType.question,
				name: 'ผู้บาดเจ็บแจ้งเอง',
				to: 17,
			},
			{
				type: choiceType.question,
				name: 'หน่วยบริการ (FR/BLS/ALS)',
				to: 20,
			},
		],
	},
	{
		name: 'สามารถระบุข้อใดต่อไปนี้หรือไม่',
		type: questionType.single,
		from: 2,
		choices: [
			{
				type: choiceType.result,
				name: 'มีคนกระเด็นออกจากรถยนต์ที่นั่ง',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'มีคนเสียชีวิต',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'เป็นรถยนต์ชนคนเดินเท้า',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'คนเจ็บมากกว่าหรือเท่ากับ 3 คน',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'ติดภายใน',
				result: result.red7,
			},
			{
				type: choiceType.question,
				name: 'มีคนเจ็บน้อยกว่า 3 คน',
				to: 3,
			},
		],
	},
	{
		name: 'ผู้ป่วยรู้สึกตัวหรือไม่',
		type: questionType.single,
		from: 3,
		choices: [
			{
				type: choiceType.question,
				name: 'ไม่รู้สึกตัว',
				to: 4,
			},
			{
				type: choiceType.result,
				name: 'กำลังชัก',
				result: result.red6,
			},
			{
				type: choiceType.question,
				name: 'รู้สึกตัว',
				to: 5,
			},
			{
				type: choiceType.result,
				name: 'ผู้แจ้งตรวจสอบยืนยันรายละเอียดของผู้ป่วยไม่ได้',
				result: result.yellow9,
			},
		],
	},
	{
		name: 'อย่าขยับผู้ป่วย (โดยเฉพาะส่วนศรีษะและคอ) แล้วเรียกผู้ป่วยดังๆ ผู้ป่วยรู้สึกตัวขึ้นหรือไม่',
		type: questionType.single,
		from: 4,
		choices: [
			{
				type: choiceType.result,
				name: 'ยังคงไม่รู้สึกตัว',
				result: result.red1,
			},
			{
				type: choiceType.question,
				name: 'พอรู้สึกตัว',
				to: 5,
			},
		],
	},
	{
		name: 'ลักษณะอาการหายใจเป็นอย่างไร',
		type: questionType.single,
		from: 5,
		choices: [
			{
				type: choiceType.result,
				name: 'พูดได้แค่ประโยคสั้นๆ/พูดติดขัด',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'หายใจเร็ว ซี่โครงบาน จมูกบานไหปลาร้ายุบ',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'หายใจมีเสียงดัง',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'ผู้ป่วยต้องลุกขึ้นนั่งหรือยืนเพื่อให้หายใจได้ดีขึ้น',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'ตัวซีดและเหงือท่วมตัว',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'หายใจขัด โดยไม่มีอาการข้างต้นร่วมด้วย',
				result: result.red2,
			},
			{
				type: choiceType.question,
				name: 'พูดได้ / หายใจปกติ',
				to: 6,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการต่อไปนี้บ้างหรือไม่',
		type: questionType.checkbox,
		from: 6,
		to: 7,
		criteria: {
			type: criteriaType.result,
			minimum: 2,
			result: result.red3,
		},

		choices: [
			{
				name: 'เหงื่อท่วมตัว',
				checked: false,
			},
			{
				name: 'เป็นลมหรือเกือบเป็นลมเมื่อลุกนั่งหรือยืน',
				checked: false,
			},
			{
				name: 'ซีดและผิวซีดเย็น',
				checked: false,
			},
		],
	},
	{
		name: 'ผู้ป่วยสามารถขยับแขน/ขาได้หรือไม่',
		type: questionType.single,
		from: 7,
		choices: [
			{
				type: choiceType.result,
				name: 'ขยับไม่ได้',
				result: result.red8,
			},
			{
				type: choiceType.question,
				name: 'ขยับได้',
				to: 8,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการปวดบริเวณใดหรือไม่',
		type: questionType.single,
		from: 8,
		choices: [
			{
				type: choiceType.result,
				name: 'ศรีษะ / คอ / หลัง / สะโพก / ลำตัว',
				result: result.yellow4,
			},
			{
				type: choiceType.result,
				name: 'แขนขา',
				result: result.white2,
			},
			{
				type: choiceType.question,
				name: 'ไม่มีอาการปวด',
				to: 9,
			},
		],
	},
	{
		name: 'มีตำแหน่งของบาดแผลส่วนใดของร่างกาย',
		type: questionType.single,
		from: 9,
		choices: [
			{
				type: choiceType.result,
				name: 'ศรีษะ / คอ / ทรวงอก / ช่องท้อง',
				result: result.red5,
			},
			{
				type: choiceType.question,
				name: 'ที่อื่นๆ',
				to: 10,
			},
			{
				type: choiceType.question,
				name: 'ไม่มีบาดแผล',
				to: 12,
			},
		],
	},
	{
		name: 'ขณะนี้ผู้ป่วยยังมีเลือดออกอยู่หรือไม่',
		type: questionType.single,
		from: 10,
		choices: [
			{
				type: choiceType.question,
				name: 'เลือดยังไหลอยู่',
				to: 11,
			},
			{
				type: choiceType.question,
				name: 'ไม่มีเลือดออก/เลือดหยุดแล้ว',
				to: 12,
			},
		],
	},
	{
		name: 'ให้ใช้ผ้าสะอาดหนาๆ กดบนแผนแน่นๆ ค้างไว้ แล้วมีเลือดชุ่มขึ้นมาหรือไม่',
		type: questionType.single,
		from: 11,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: result.red5,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 12,
			},
		],
	},
	{
		name: 'ผู้ป่วยชักหลังการบาดเจ็บหรือไม่',
		type: questionType.single,
		from: 12,
		choices: [
			{
				type: choiceType.result,
				name: 'ชัก',
				result: result.red6,
			},
			{
				type: choiceType.question,
				name: 'ไม่ชัก',
				to: 13,
			},
		],
	},
	{
		name: 'ผู้ป่วยหมดสติชั่ววูบหรือไม่',
		type: questionType.single,
		from: 13,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: result.yellow1,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 14,
			},
		],
	},
	{
		name: 'มีกระดูกหักหรือไม่',
		type: questionType.single,
		from: 14,
		choices: [
			{
				type: choiceType.result,
				name: 'ไม่มี',
				result: result.white1,
			},
			{
				type: choiceType.question,
				name: 'มี',
				to: 15,
			},
		],
	},
	{
		name: 'กระดูกหักตำแหน่งใดบ้าง',
		type: questionType.single,
		from: 15,
		choices: [
			{
				type: choiceType.result,
				name: 'ต้นคอ / หลัง / กระดูกเชิงกราน / ต้นขา / ต้นแขน',
				result: result.red9,
			},
			{
				type: choiceType.result,
				name: 'อื่นๆ',
				result: result.green1,
			},
		],
	},
	{
		name: 'ผู้ป่วย/ผู้แจ้งยืนยันการขอความช่วยเหลือใช่หรือไม่',
		type: questionType.single,
		from: 16,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: result.green6,
			},
			{
				type: choiceType.result,
				name: 'ไม่ใช่',
				to: null,
			},
		],
	},
	{
		name: 'สามารถระบุข้อใดต่อไปนี้หรือไม่',
		type: questionType.single,
		from: 17,
		choices: [
			{
				type: choiceType.result,
				name: 'มีคนกระเด็นออกจากรถยนต์ที่นั่ง',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'มีคนเสียชีวิต',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'เป็นรถยนต์ชนคนเดินเท้า',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'คนเจ็บมากกว่าหรือเท่ากับ 3 คน',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'ติดภายใน',
				result: result.red7,
			},
			{
				type: choiceType.question,
				name: 'มีคนเจ็บน้อยกว่า 3 คน',
				to: 18,
			},
		],
	},
	{
		name: 'มีผู้บาดเจ็บไม่รู้สึกตัวหรือไม่',
		type: questionType.single,
		from: 18,
		choices: [
			{
				type: choiceType.question,
				name: 'มีคนไม่รู้สึกตัว',
				to: 19,
			},
			{
				type: choiceType.result,
				name: 'ทุกคนรู้สึกตัวดี',
				result: result.yellow3,
			},
		],
	},
	{
		name: 'อย่าขยับตัวผู้ป่วย (โดยเฉพาะส่วนศรีษะและคอ) แล้วเรียกผู้ป่วยด้วยเสียงดังๆ ผู้ป่วยรู้สึกตัวขึ้นหรือไม่',
		type: questionType.single,
		from: 19,
		choices: [
			{
				type: choiceType.result,
				name: 'ยังคงไม่รู้สึกตัว',
				result: result.red1,
			},
			{
				type: choiceType.result,
				name: 'พอรู้สึกตัว',
				result: result.yellow3,
			},
		],
	},
	{
		name: 'สามารถระบุข้อใดต่อไปนี้หรือไม่',
		type: questionType.single,
		from: 20,
		choices: [
			{
				type: choiceType.result,
				name: 'มีคนกระเด็นออกจากรถยนต์ที่นั่ง',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'มีคนเสียชีวิต',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'เป็นรถยนต์ชนคนเดินเท้า',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'คนเจ็บมากกว่าหรือเท่ากับ 3 คน',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'ติดภายใน',
				result: result.red7,
			},
			{
				type: choiceType.question,
				name: 'มีคนเจ็บน้อยกว่า 3 คน',
				to: 21,
			},
		],
	},
	{
		name: 'อาการผู้บาดเจ็บเป็นอย่างไร',
		type: questionType.single,
		from: 21,
		choices: [
			{
				type: choiceType.result,
				name: 'มีผู้บาดเจ็บหนัก (สัญญาณชีพ หรือระดับความรู้สึกผิดปกติ)',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'มีผู้บาดเจ็บเล็กน้อย',
				result: result.green8,
			},
		],
	},
	{
		name: 'สามารถระบุข้อใดต่อไปนี้หรือไม่',
		type: questionType.single,
		from: 22,
		choices: [
			{
				type: choiceType.result,
				name: 'มีคนกระเด็นออกจากรถยนต์ที่นั่ง',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'มีคนเสียชีวิต',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'เป็นรถยนต์ชนคนเดินเท้า',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'คนเจ็บมากกว่าหรือเท่ากับ 3 คน',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'ติดภายใน',
				result: result.yellow8,
			},
			{
				type: choiceType.result,
				name: 'ไม่สามารถระบุได้ / อื่นๆ',
				result: result.green9,
			},
		],
	},
];

const module25 = {
	name: 'อุบัติเหตุยานยนต์',
	module: 25,
	description: 'อุบัติเหตุยานยนต์',
	image: 'assets/imgs/car-crash.png',
	questions: questions,
};

export default module25;