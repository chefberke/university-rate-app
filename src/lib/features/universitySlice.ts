import { createSlice } from '@reduxjs/toolkit'

import Egelogo from "../../../public/assets/ege_university_logo.png";
import Deulogo from "../../../public/assets/deu_logo.png";
import İytelogo from "../../../public/assets/iyte_logo.png";
import İkclogo from "../../../public/assets/ikc_logo.png";
import Bulogo from "../../../public/assets/bu_logo.png";
import İdulogo from "../../../public/assets/idu_logo.png";
import Havyologo from "../../../public/assets/havyo_logo.png";
import Sbulogo from "../../../public/assets/sbu_logo.png";
import İeulogo from "../../../public/assets/ieu_logo.png";
import İkyologo from "../../../public/assets/ikmyo_logo.png";
import Yasarlogo from "../../../public/assets/yu_logo.png";
import Thklogo from "../../../public/assets/thku_logo.png";
import İtulogo from "../../../public/assets/tu_logo.png";
import Ytulogo from "../../../public/assets/ytu_logo.png"
import Acibademlogo from "../../../public/assets/acibadem_logo.png"
import Bagulogo from "../../../public/assets/Baulogo.png"
import Beykentlogo from "../../../public/assets/beykent_logo.png"
import Birunilogo from "../../../public/assets/biruni_logo.png"
import DogusUniversityLogo from "../../../public/assets/dogus_logo.png"
import FenerbahceUniversityLogo from "../../../public/assets/fenerbahce_logo.png"
import HalicUniversityLogo from "../../../public/assets/halic_logo.png"
import IsikUniversityLogo from "../../../public/assets/isikuniversitesi_logo.png"
import IbnHaldunUniversityLogo from "../../../public/assets/ibnhaldun_logo.png"
import Istanbul29MayisUniversityLogo from "../../../public/assets/29mayis_logo.png"
import AltinbasUniversityLogo from "../../../public/assets/altinbas_logo.png"
import ArelUniversityLogo from "../../../public/assets/arel_logo.png"
import AtlasUniversityLogo from "../../../public/assets/atlas_logo.png"


interface University {
  id: number;
  name: string;
  description: string;
  date_of_establishment: string;
  image: any;
}

interface UniversityState {
  list: University[];
  filteredlist: University[];
}

const initialState: UniversityState = {
  list: [
    {
      id: 1,
      name: "Ege Üniversitesi",
      description:
        "Türkiye'nin köklü ve saygın eğitim kurumlarından biri olan Ege Üniversitesi, İzmir'de bulunan bir devlet üniversitesidir. 1955 yılında kurulmuş olup, güçlü akademik kadrosu ve geniş eğitim programlarıyla tanınır. Modern kampüsü ve çeşitli sosyal tesisleri ile öğrencilere zengin bir öğrenim deneyimi sunar. Ege Üniversitesi, bilim, teknoloji, sanat ve kültür alanındaki katkılarıyla ulusal ve uluslararası alanda önemli bir konuma sahiptir.",
      date_of_establishment: "1955",
      image: Egelogo,
    },
    {
      id: 2,
      name: "Dokuz Eylül Üniversitesi",
      description:
        "Dokuz Eylül Üniversitesi, Türkiye'nin İzmir şehrinde önde gelen bir devlet üniversitesidir. 1982 yılında kurulmuş olup geniş bir program yelpazesi sunar ve akademik mükemmeliyet ile araştırma konusundaki ünüyle bilinir. Üniversite, modern kampüsü, aktif öğrenci yaşamı ve çeşitli çalışma alanlarına önemli katkılarıyla tanınır.",
      date_of_establishment: "1982",
      image: Deulogo,
    },
    {
      id: 3,
      name: "İzmir Yüksek Teknoloji Enstitüsü",
      description:
        "1992 yılında kurulan İzmir Yüksek Teknoloji Enstitüsü, İzmir'de bulunan bir devlet üniversitesidir ve mühendislik ile doğa bilimlerine odaklanır. Yenilikçi araştırmaları ve yüksek akademik standartları ile tanınan enstitü, teknoloji ve gelişim alanında dinamik bir öğrenim ortamı sağlar.",
      date_of_establishment: "1992",
      image: İytelogo,
    },
    {
      id: 9,
      name: "İzmir Ekonomi Üniversitesi",
      description:
        "2001 yılında kurulan İzmir Ekonomi Üniversitesi, iş dünyası, ekonomi ve sosyal bilimler konularına odaklanan önde gelen bir özel üniversitedir. Öğrencileri çeşitli alanlarda başarılı kariyerlere hazırlayan geniş bir program yelpazesi sunar.",
      date_of_establishment: "2001",
      image: İeulogo,
    },
    {
      id: 11,
      name: "Yaşar Üniversitesi",
      description:
        "2001 yılında kurulan Yaşar Üniversitesi, İzmir'de bulunan özel bir kurumdur ve uluslararası eğitime vurgu yapar. Lisans ve yüksek lisans programları sunar ve akademik mükemmeliyet ile yenilikçilik konusunda kararlıdır.",
      date_of_establishment: "2001",
      image: Yasarlogo,
    },
    {
      id: 4,
      name: "İzmir Katip Çelebi Üniversitesi",
      description:
        "2010 yılında kurulan İzmir Katip Çelebi Üniversitesi, İzmir'de büyüyen bir devlet üniversitesidir. Çeşitli disiplinlerde geniş bir program yelpazesi sunar ve destekleyici bir akademik ortamda kaliteli eğitim ve araştırma fırsatları sağlamayı hedefler.",
      date_of_establishment: "2010",
      image: İkclogo,
    },
    {
      id: 13,
      name: "İzmir Tınaztepe Üniversitesi",
      description:
        "2018 yılında kurulan İzmir Tınaztepe Üniversitesi, pratik ve yenilikçi eğitime odaklanan modern bir kurumdur. Üniversite, öğrencilerinin akademik ve profesyonel gelişimlerine katkıda bulunmayı hedefler.",
      date_of_establishment: "2018",
      image: İtulogo,
    },
    {
      id: 5,
      name: "Bakırçay Üniversitesi",
      description:
        "2016 yılında kurulan Bakırçay Üniversitesi, İzmir'de bulunan bir devlet kurumudur ve uygulamalı bilimler ile pratik eğitime vurgu yapar. Modern bir öğrenim ortamı sunar ve öğrencilerinin akademik ve profesyonel gelişimlerini teşvik etmeye adanmıştır.",
      date_of_establishment: "2016",
      image: Bulogo,
    },
    {
      id: 10,
      name: "İzmir Kavram Meslek Yüksekokulu",
      description:
        "2008 yılında kurulan İzmir Kavram Meslek Yüksekokulu, çeşitli teknik ve mesleki alanlarda uzmanlaşmış eğitim sunar. Kurum, öğrencilerini seçtikleri kariyerler için pratik beceriler ve bilgiyle donatmaya odaklanır.",
      date_of_establishment: "2008",
      image: İkyologo,
    },
    {
      id: 6,
      name: "İzmir Demokrasi Üniversitesi",
      description:
        "2016 yılında kurulan İzmir Demokrasi Üniversitesi, demokratik değerleri teşvik etmeye ve geniş kapsamlı bir eğitim sunmaya odaklanır. Üniversite, akademik mükemmeliyete ve öğrencilerinin canlı bir kampüs yaşamına sahip olmalarına önem verir.",
      date_of_establishment: "2016",
      image: İdulogo,
    },
    {
      id: 7,
      name: "Kara Harp Okulu Hava Teknik Astsubay Meslek Yüksekokulu",
      description:
        "2016 yılında kurulan bu uzmanlaşmış kurum, Türkiye'de hava teknik astsubayları için eğitim ve öğretim sunar. Savunma kariyerleri için gerekli teknik ve liderlik becerilerini geliştirmeye odaklanır.",
      date_of_establishment: "2016",
      image: Havyologo,
    },
    {
      id: 8,
      name: "Sağlık Bilimleri Üniversitesi İzmir Tıp Fakültesi",
      description:
        "2020 yılında kurulan Sağlık Bilimleri Üniversitesi İzmir Tıp Fakültesi, tıp eğitimi ve araştırmalarını ilerletmeye adanmıştır. Yüksek nitelikli sağlık profesyonelleri yetiştirmeyi ve tıp alanında yenilikçi araştırmalara katkıda bulunmayı hedefler.",
      date_of_establishment: "2020",
      image: Sbulogo,
    },
    {
      id: 12,
      name: "Türk Hava Kurumu Üniversitesi",
      description:
        "2011 yılında kurulan Türk Hava Kurumu Üniversitesi, havacılık mühendisliği ve ilgili alanlara odaklanır. Havacılık ve uzay teknolojilerinde yüksek kaliteli eğitim ve araştırma fırsatları sağlamaya adanmıştır.",
      date_of_establishment: "2011",
      image: Thklogo,
    },
    {
      id: 14,
      name: "Yıldız Teknik Üniversitesi",
      description:
        "1911 yılında kurulan Yıldız Teknik Üniversitesi, mühendislik ve mimarlık alanlarında güçlü bir eğitim sunar. Bilimsel araştırma ve teknoloji geliştirme konularında önde gelen bir kuruluştur.",
      date_of_establishment: "1911",
      image: Ytulogo
    },
    {
      id: 15,
      name: "Acıbadem Üniversitesi",
      description:
        "2009 yılında kurulan Acıbadem Üniversitesi, sağlık bilimleri, mühendislik ve sosyal bilimler alanlarında eğitim verir. Modern eğitim olanakları ve sağlık alanındaki güçlü altyapısıyla tanınır.",
      date_of_establishment: "2007",
      image: Acibademlogo
    },
    {
      id: 16,
      name: "Bahçeşehir Üniversitesi",
      description:
        "1998 yılında kurulan Bahçeşehir Üniversitesi, uluslararası standartlarda eğitim sunar ve özellikle işletme, mühendislik ve sosyal bilimler alanlarında güçlü bir akademik program sunar.",
      date_of_establishment: "1998",
      image: Bagulogo
    },
    {
      id: 17,
      name: "Beykent Üniversitesi",
      description:
        "1997 yılında kurulan Beykent Üniversitesi, çeşitli akademik disiplinlerde eğitim sunar ve öğrencilere modern bir eğitim ortamı sağlar. Özellikle iletişim, mühendislik ve sosyal bilimler alanlarında dikkat çeker.",
      date_of_establishment: "1997",
      image: Beykentlogo,
    },
    {
      id: 18,
      name: "Biruni Üniversitesi",
      description:
        "2014 yılında kurulan Biruni Üniversitesi, özellikle sağlık bilimleri ve mühendislik alanlarında eğitim sunar. Modern eğitim olanakları ve araştırma fırsatları ile öğrencilere geniş bir akademik yelpaze sağlar.",
      date_of_establishment: "2014",
      image: Birunilogo
    },
    {
      id: 19,
      name: "Doğuş Üniversitesi",
      description:
        "1997 yılında kurulan Doğuş Üniversitesi, mühendislik, sosyal bilimler ve iş yönetimi alanlarında eğitim sunar. Yenilikçi eğitim yaklaşımları ve modern kampüsü ile tanınır.",
      date_of_establishment: "1997",
      image: DogusUniversityLogo,
    },
    {
      id: 20,
      name: "Fenerbahçe Üniversitesi",
      description:
        "2016 yılında kurulan Fenerbahçe Üniversitesi, özellikle spor bilimleri, işletme ve sosyal bilimler alanlarında eğitim verir. Üniversite, Fenerbahçe Spor Kulübü'nün akademik bir uzantısı olarak bilinir.",
      date_of_establishment: "2016",
      image: FenerbahceUniversityLogo,
    },
    {
      id: 21,
      name: "Haliç Üniversitesi",
      description:
        "1998 yılında kurulan Haliç Üniversitesi, mühendislik, sanat, sosyal bilimler ve sağlık bilimleri alanlarında eğitim verir. İstanbul'un merkezinde modern bir kampüse sahiptir ve çeşitli araştırma olanakları sunar.",
      date_of_establishment: "1998",
      image: HalicUniversityLogo,
    },
    {
      id: 22,
      name: "Işık Üniversitesi",
      description:
        "1996 yılında kurulan Işık Üniversitesi, mühendislik, sosyal bilimler ve sanat alanlarında eğitim sunar. Yüksek kaliteli akademik programları ve modern kampüsü ile tanınır.",
      date_of_establishment: "1996",
      image: IsikUniversityLogo,
    },
    {
      id: 23,
      name: "İbn Haldun Üniversitesi",
      description:
        "2015 yılında kurulan İbn Haldun Üniversitesi, sosyal bilimler ve beşeri bilimler alanlarında eğitim verir. Modern eğitim yöntemleri ve akademik araştırmalar ile dikkat çeker.",
      date_of_establishment: "2015",
      image: IbnHaldunUniversityLogo,
    },
    {
      id: 24,
      name: "İstanbul 29 Mayıs Üniversitesi",
      description:
        "2010 yılında kurulan İstanbul 29 Mayıs Üniversitesi, sosyal bilimler, beşeri bilimler ve teoloji alanlarında eğitim verir. Modern eğitim yöntemleri ve akademik araştırmalara odaklanır.",
      date_of_establishment: "2010",
      image: Istanbul29MayisUniversityLogo,
    },
    {
      id: 25,
      name: "Altınbaş Üniversitesi",
      description:
        "2008 yılında kurulan Altınbaş Üniversitesi, mühendislik, hukuk, işletme ve sağlık bilimleri alanlarında eğitim verir. Yenilikçi eğitim anlayışı ve modern kampüsü ile tanınır.",
      date_of_establishment: "2008",
      image: AltinbasUniversityLogo,
    },
    {
      id: 26,
      name: "İstanbul Arel Üniversitesi",
      description:
        "2007 yılında kurulan İstanbul Arel Üniversitesi, mühendislik, işletme, sağlık bilimleri ve sosyal bilimler alanlarında eğitim sunar. Modern eğitim yaklaşımı ve geniş akademik programları ile bilinir.",
      date_of_establishment: "2007",
      image: ArelUniversityLogo,
    },
    {
      id: 27,
      name: "İstanbul Atlas Üniversitesi",
      description:
        "2018 yılında kurulan İstanbul Atlas Üniversitesi, sağlık bilimleri, mühendislik, sosyal bilimler ve sanat alanlarında eğitim sunar. Modern kampüsü ve yenilikçi eğitim anlayışı ile dikkat çeker.",
      date_of_establishment: "2018",
      image: AtlasUniversityLogo,
    },
  ],
  filteredlist: []
  
}

export const universitySlice = createSlice({
  name: 'university',
  initialState,
  reducers: {
    search: (state, action) => {
      if (action.payload === "") {
        state.filteredlist = state.list
          return;
      }
  
      const lowerText = action.payload.toLowerCase();
      const matchUniversity = state.list.filter((university: any) => 
          university.name.toLowerCase().includes(lowerText)
      );
  
      state.filteredlist = matchUniversity
    
  }
  
  },
})

export const { search } = universitySlice.actions


export default universitySlice.reducer