export type Doctor = {
  id: number;
  name: string;
  rating: string;
  category: 'Doctor' | 'Dentist' | 'Pharmacist';
  address: string;
  price: number;
  image: string;
  status: 'online' | 'offline';
  badge: string[];
  tag: string;
};

export const doctorsData: Doctor[] = [
  {
    id: 1,
    name: 'รศ.ภญ. สุณี  เลิศสินอุดม',
    rating: '5.0',
    category: 'Doctor',
    address: 'โรงพยาบาลขอนแก่น',
    price: 0,
    tag: 'เเพทย์ (โรคทั่วไป)',
    image:
      'https://s3-alpha-sig.figma.com/img/f277/893f/b8f845ad137def8179f1f1e763f51753?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BF1pxtZ2rM-qrpxnPbgia~jjGI-sNeOkqeYZF9qzOaqF79OIwlrwVHMtTWCx-QdwNorDWIcMk2gLOhczC0QLuytQRo9QFxws~ruCvFU8bjCK0KTuBbXLhAlZiSeDOdNRhoSdMSmqzSWKKlSNeX7RbyeYw9TzR~jDXY-7FcuRIGPF11PKLNwI4ES8HAVYBh9mWIK4DR8qGsxcnRO2BnBp1aYNnN7xC5vv2jLH5LlqKQPwQ2oLCai04F05BziOC9LSCZ3jIVxNytyEdTuG6EG9OAitZPiemrKATUPkYnXxtenxNkMTiwkt2J9CI8Slhqdl2rJ-Ei45~v5EgqtBnWUGUA__',
    status: 'online',
    badge: [
      'https://s3-alpha-sig.figma.com/img/f405/5e42/584282cad7c8e9a8b39848422d4fde54?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WECHKgWb63ScTpiJuksvREN3v6jvhrvHfd203nL2pA7Re2UnrowOD67oh82GYWTbcxt9cvXJ-U3hanpWRSzSufKIM9KVpW9MMoNudZwB8ZDn2hpEbN8LbqvaQRztR9ihP2x46i-RwgSgBT2z3DZLsjf0P~Qz0QKmthDfSE-MUB6xkQ9xKBWlsHgfrcFBdYotDXdoL68YvBefy~pEjWp7zf~Wu~gn~YBhjHNDUNv~cKzAep59xDCFMhGPqCHmJz~fkGI8cn4p3xbxEpjxg9-741-DTakdVrhLYgQ-TuP5wEVk6EK2ksRllykyxEq-SYMffK~HLPEA~X8N0L-POnjSKQ__',
      'https://s3-alpha-sig.figma.com/img/4a3b/734d/92789fbb8e22c0f3fe4f32f81908d19d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j~tfAXALCahWkRJnt1Ushnm~t2pHZXnS~KSjJbw4wT-MTZSDKLYoRW4N7FPzmlLlXQLSeHn4tS2bV8S5DkvkXR8JFAotP8NpAbQCvBEBexvLxd7IyWQrmA52wnFtRIU5QdVERbgf-xbE7SfI6jZT9JZ~Tm6kPmg2IizAZ1CN1vcZv2DP4PyU2W-jrPbW78SFinktQ02uO2PO2jYX63MnIEzSvOerUsogQ-SnvFtRiAHY1tM-k-5JMCjvk7S0KXgIQ5RtdbQmLSRbsmO5efu1x8frwtYE8PPOXJ8I-bQIa6NeJ8igfG~NMM-Q2mPCslWjXOtPPGEc0W28t0Lo~tJj7Q__',
      'https://s3-alpha-sig.figma.com/img/fa60/c6f1/e65436e0ea2a11324425027866245ccb?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cdPlfC8VVZWQa7g2Bk4ARjuzGcCCohOjWMOeXrti6ffPCRJ2d3hFomCymS1BP7kWkbOIAncSqPEr5TfUaUGckKlSnkpTKFq6CcRRUuJ1~rQDSf0GMrLlyDzR4g0Q8hLoiQa8y0xlKlqX3VmM5hOayzedX-EAEPNLwMYpjthN-83IVioqGpv~WqUM1LDf8Ll~wL1iYEwHJCiKNH4XZnpNKSnJQul53hucQQlqx2YLDhxKk1b~xZXQDFc2SMm2tA65EmHz5HA1iAoQCOxfw28mCIU10b8WlXMe21tlag9AxD6nDB-8wo0895htPUTLo-KI23i0p~qBUtAAoCLISz5jrg__',
      'https://s3-alpha-sig.figma.com/img/28ff/c73b/de38819731cbc6ac2a7389e7297fcab9?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hxDveZ1zobopCuCs6S1FCQHPy9IHmsxsYrOrK1vWYDUr3FT~Brp0BaPCPmxRV92WOQsNecmNL~~ItYnxwwPl90eU4nlAVeBhNvCkW9ABTK9Uo-oPZX7odDtUz~AhUme1MnC6u6KrtO28CxMuE0Yj7R-Oi6mj6HK1lwAd6AlSz0gCkX0xulzu0mWFP6wkKs5Ins3zooTgD7eYLpb-DODVtnzhqqLlpncZ1~lNtxHMcYhmFYaqWnw6HlckPkmc09sQ4zZ0-CO2VZHF2tswoQjNKPFsVORKGGRTbgTdQIZb8Y-eXkOZ-M~VTnNgLJ~Dq0Pg66dlkS5jcXY-H4XB84FhgQ__',
      'https://s3-alpha-sig.figma.com/img/58fb/3b75/98d63a2723224e5f6cdb60ebb12f4b76?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TM~pppkpdZeucYavuv~nK32ONOSB0UfEDQl1EhyTEilN2iGw6IhfqF6bzMOw6w6CoVrrXkUIR3PHmY9M7qr~nE~x4I5IF7oplFAXXK6--EBmBKghQWJZi0O4Bpe1dWhVfE9lvouaMuzrueMkm1t3nVvbGnwdysbYzIvMNaO-AR9X6BiIm-ryvZTgZ~aAi0wpQwCMgeFGu6dBLcf7tLg91naul5F8lVOtSZ4C4ak0zpL7UlfJYKo6V8EC7gf89AnYH0QkEzKPWibrNPxSI-UTzmPmrUYyMga7iKeeA9UEx6ieji50x3ZK7HIea6S-svAEjVas3A3sZNlWoDe2n0Xvrw__',
    ],
  },
  {
    id: 2,
    name: 'รศ.ภญ. สุณี  เลิศสินอุดม',
    rating: '5.0',
    category: 'Dentist',
    address: 'โรงพยาบาลขอนแก่น',
    price: 0,
    tag: 'เเพทย์ (โรคทั่วไป)',
    image:
      'https://s3-alpha-sig.figma.com/img/f277/893f/b8f845ad137def8179f1f1e763f51753?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BF1pxtZ2rM-qrpxnPbgia~jjGI-sNeOkqeYZF9qzOaqF79OIwlrwVHMtTWCx-QdwNorDWIcMk2gLOhczC0QLuytQRo9QFxws~ruCvFU8bjCK0KTuBbXLhAlZiSeDOdNRhoSdMSmqzSWKKlSNeX7RbyeYw9TzR~jDXY-7FcuRIGPF11PKLNwI4ES8HAVYBh9mWIK4DR8qGsxcnRO2BnBp1aYNnN7xC5vv2jLH5LlqKQPwQ2oLCai04F05BziOC9LSCZ3jIVxNytyEdTuG6EG9OAitZPiemrKATUPkYnXxtenxNkMTiwkt2J9CI8Slhqdl2rJ-Ei45~v5EgqtBnWUGUA__',
    status: 'offline',
    badge: [
      'https://s3-alpha-sig.figma.com/img/f405/5e42/584282cad7c8e9a8b39848422d4fde54?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WECHKgWb63ScTpiJuksvREN3v6jvhrvHfd203nL2pA7Re2UnrowOD67oh82GYWTbcxt9cvXJ-U3hanpWRSzSufKIM9KVpW9MMoNudZwB8ZDn2hpEbN8LbqvaQRztR9ihP2x46i-RwgSgBT2z3DZLsjf0P~Qz0QKmthDfSE-MUB6xkQ9xKBWlsHgfrcFBdYotDXdoL68YvBefy~pEjWp7zf~Wu~gn~YBhjHNDUNv~cKzAep59xDCFMhGPqCHmJz~fkGI8cn4p3xbxEpjxg9-741-DTakdVrhLYgQ-TuP5wEVk6EK2ksRllykyxEq-SYMffK~HLPEA~X8N0L-POnjSKQ__',
      'https://s3-alpha-sig.figma.com/img/4a3b/734d/92789fbb8e22c0f3fe4f32f81908d19d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j~tfAXALCahWkRJnt1Ushnm~t2pHZXnS~KSjJbw4wT-MTZSDKLYoRW4N7FPzmlLlXQLSeHn4tS2bV8S5DkvkXR8JFAotP8NpAbQCvBEBexvLxd7IyWQrmA52wnFtRIU5QdVERbgf-xbE7SfI6jZT9JZ~Tm6kPmg2IizAZ1CN1vcZv2DP4PyU2W-jrPbW78SFinktQ02uO2PO2jYX63MnIEzSvOerUsogQ-SnvFtRiAHY1tM-k-5JMCjvk7S0KXgIQ5RtdbQmLSRbsmO5efu1x8frwtYE8PPOXJ8I-bQIa6NeJ8igfG~NMM-Q2mPCslWjXOtPPGEc0W28t0Lo~tJj7Q__',
      'https://s3-alpha-sig.figma.com/img/fa60/c6f1/e65436e0ea2a11324425027866245ccb?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cdPlfC8VVZWQa7g2Bk4ARjuzGcCCohOjWMOeXrti6ffPCRJ2d3hFomCymS1BP7kWkbOIAncSqPEr5TfUaUGckKlSnkpTKFq6CcRRUuJ1~rQDSf0GMrLlyDzR4g0Q8hLoiQa8y0xlKlqX3VmM5hOayzedX-EAEPNLwMYpjthN-83IVioqGpv~WqUM1LDf8Ll~wL1iYEwHJCiKNH4XZnpNKSnJQul53hucQQlqx2YLDhxKk1b~xZXQDFc2SMm2tA65EmHz5HA1iAoQCOxfw28mCIU10b8WlXMe21tlag9AxD6nDB-8wo0895htPUTLo-KI23i0p~qBUtAAoCLISz5jrg__',
      'https://s3-alpha-sig.figma.com/img/28ff/c73b/de38819731cbc6ac2a7389e7297fcab9?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hxDveZ1zobopCuCs6S1FCQHPy9IHmsxsYrOrK1vWYDUr3FT~Brp0BaPCPmxRV92WOQsNecmNL~~ItYnxwwPl90eU4nlAVeBhNvCkW9ABTK9Uo-oPZX7odDtUz~AhUme1MnC6u6KrtO28CxMuE0Yj7R-Oi6mj6HK1lwAd6AlSz0gCkX0xulzu0mWFP6wkKs5Ins3zooTgD7eYLpb-DODVtnzhqqLlpncZ1~lNtxHMcYhmFYaqWnw6HlckPkmc09sQ4zZ0-CO2VZHF2tswoQjNKPFsVORKGGRTbgTdQIZb8Y-eXkOZ-M~VTnNgLJ~Dq0Pg66dlkS5jcXY-H4XB84FhgQ__',
      'https://s3-alpha-sig.figma.com/img/58fb/3b75/98d63a2723224e5f6cdb60ebb12f4b76?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TM~pppkpdZeucYavuv~nK32ONOSB0UfEDQl1EhyTEilN2iGw6IhfqF6bzMOw6w6CoVrrXkUIR3PHmY9M7qr~nE~x4I5IF7oplFAXXK6--EBmBKghQWJZi0O4Bpe1dWhVfE9lvouaMuzrueMkm1t3nVvbGnwdysbYzIvMNaO-AR9X6BiIm-ryvZTgZ~aAi0wpQwCMgeFGu6dBLcf7tLg91naul5F8lVOtSZ4C4ak0zpL7UlfJYKo6V8EC7gf89AnYH0QkEzKPWibrNPxSI-UTzmPmrUYyMga7iKeeA9UEx6ieji50x3ZK7HIea6S-svAEjVas3A3sZNlWoDe2n0Xvrw__',
    ],
  },
  {
    id: 3,
    name: 'รศ.ภญ. สุณี  เลิศสินอุดม',
    rating: '5.0',
    category: 'Pharmacist',
    address: 'โรงพยาบาลขอนแก่น',
    price: 0,
    tag: 'เเพทย์ (โรคทั่วไป)',
    image:
      'https://s3-alpha-sig.figma.com/img/f277/893f/b8f845ad137def8179f1f1e763f51753?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BF1pxtZ2rM-qrpxnPbgia~jjGI-sNeOkqeYZF9qzOaqF79OIwlrwVHMtTWCx-QdwNorDWIcMk2gLOhczC0QLuytQRo9QFxws~ruCvFU8bjCK0KTuBbXLhAlZiSeDOdNRhoSdMSmqzSWKKlSNeX7RbyeYw9TzR~jDXY-7FcuRIGPF11PKLNwI4ES8HAVYBh9mWIK4DR8qGsxcnRO2BnBp1aYNnN7xC5vv2jLH5LlqKQPwQ2oLCai04F05BziOC9LSCZ3jIVxNytyEdTuG6EG9OAitZPiemrKATUPkYnXxtenxNkMTiwkt2J9CI8Slhqdl2rJ-Ei45~v5EgqtBnWUGUA__',
    status: 'online',
    badge: [
      'https://s3-alpha-sig.figma.com/img/f405/5e42/584282cad7c8e9a8b39848422d4fde54?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WECHKgWb63ScTpiJuksvREN3v6jvhrvHfd203nL2pA7Re2UnrowOD67oh82GYWTbcxt9cvXJ-U3hanpWRSzSufKIM9KVpW9MMoNudZwB8ZDn2hpEbN8LbqvaQRztR9ihP2x46i-RwgSgBT2z3DZLsjf0P~Qz0QKmthDfSE-MUB6xkQ9xKBWlsHgfrcFBdYotDXdoL68YvBefy~pEjWp7zf~Wu~gn~YBhjHNDUNv~cKzAep59xDCFMhGPqCHmJz~fkGI8cn4p3xbxEpjxg9-741-DTakdVrhLYgQ-TuP5wEVk6EK2ksRllykyxEq-SYMffK~HLPEA~X8N0L-POnjSKQ__',
      'https://s3-alpha-sig.figma.com/img/4a3b/734d/92789fbb8e22c0f3fe4f32f81908d19d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j~tfAXALCahWkRJnt1Ushnm~t2pHZXnS~KSjJbw4wT-MTZSDKLYoRW4N7FPzmlLlXQLSeHn4tS2bV8S5DkvkXR8JFAotP8NpAbQCvBEBexvLxd7IyWQrmA52wnFtRIU5QdVERbgf-xbE7SfI6jZT9JZ~Tm6kPmg2IizAZ1CN1vcZv2DP4PyU2W-jrPbW78SFinktQ02uO2PO2jYX63MnIEzSvOerUsogQ-SnvFtRiAHY1tM-k-5JMCjvk7S0KXgIQ5RtdbQmLSRbsmO5efu1x8frwtYE8PPOXJ8I-bQIa6NeJ8igfG~NMM-Q2mPCslWjXOtPPGEc0W28t0Lo~tJj7Q__',
      'https://s3-alpha-sig.figma.com/img/fa60/c6f1/e65436e0ea2a11324425027866245ccb?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cdPlfC8VVZWQa7g2Bk4ARjuzGcCCohOjWMOeXrti6ffPCRJ2d3hFomCymS1BP7kWkbOIAncSqPEr5TfUaUGckKlSnkpTKFq6CcRRUuJ1~rQDSf0GMrLlyDzR4g0Q8hLoiQa8y0xlKlqX3VmM5hOayzedX-EAEPNLwMYpjthN-83IVioqGpv~WqUM1LDf8Ll~wL1iYEwHJCiKNH4XZnpNKSnJQul53hucQQlqx2YLDhxKk1b~xZXQDFc2SMm2tA65EmHz5HA1iAoQCOxfw28mCIU10b8WlXMe21tlag9AxD6nDB-8wo0895htPUTLo-KI23i0p~qBUtAAoCLISz5jrg__',
      'https://s3-alpha-sig.figma.com/img/28ff/c73b/de38819731cbc6ac2a7389e7297fcab9?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hxDveZ1zobopCuCs6S1FCQHPy9IHmsxsYrOrK1vWYDUr3FT~Brp0BaPCPmxRV92WOQsNecmNL~~ItYnxwwPl90eU4nlAVeBhNvCkW9ABTK9Uo-oPZX7odDtUz~AhUme1MnC6u6KrtO28CxMuE0Yj7R-Oi6mj6HK1lwAd6AlSz0gCkX0xulzu0mWFP6wkKs5Ins3zooTgD7eYLpb-DODVtnzhqqLlpncZ1~lNtxHMcYhmFYaqWnw6HlckPkmc09sQ4zZ0-CO2VZHF2tswoQjNKPFsVORKGGRTbgTdQIZb8Y-eXkOZ-M~VTnNgLJ~Dq0Pg66dlkS5jcXY-H4XB84FhgQ__',
      'https://s3-alpha-sig.figma.com/img/58fb/3b75/98d63a2723224e5f6cdb60ebb12f4b76?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TM~pppkpdZeucYavuv~nK32ONOSB0UfEDQl1EhyTEilN2iGw6IhfqF6bzMOw6w6CoVrrXkUIR3PHmY9M7qr~nE~x4I5IF7oplFAXXK6--EBmBKghQWJZi0O4Bpe1dWhVfE9lvouaMuzrueMkm1t3nVvbGnwdysbYzIvMNaO-AR9X6BiIm-ryvZTgZ~aAi0wpQwCMgeFGu6dBLcf7tLg91naul5F8lVOtSZ4C4ak0zpL7UlfJYKo6V8EC7gf89AnYH0QkEzKPWibrNPxSI-UTzmPmrUYyMga7iKeeA9UEx6ieji50x3ZK7HIea6S-svAEjVas3A3sZNlWoDe2n0Xvrw__',
    ],
  },
];
