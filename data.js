let list = [
    {
        gift: '1 δωροεπιταγή για μαθήματα χορού ενός μήνα',
        donor: 'Galena\'s Dance Studios Χολαργός'
    },
    {
        gift: '1 βραχιόλι',
        donor: 'BRACCIALETTI CONCEPTS'
    },
    {
        gift: 'Γυναικεία ένδυση',
        donor: 'MARIANNA’S WARDROBE'
    },
    {
        gift: '1 Μαρμάρινο διακοσμητικό',
        donor: 'IKTINOS MARMARON'
    },
    {
        gift: '1 i-bank payband προ-φορτισμένο με 100€ ',
        donor: 'Εθνική Τράπεζα'
    },
    {
        gift: '1 κάρτα για δωρεάν γεύμα',
        donor: 'ANCHO'
    },
    {
        gift: '1 Ζευγάρι γυαλιών ηλίου Original vintage',
        donor: ''
    },
    {
        gift: '1 δωροεπιταγή αξίας 50 ευρώ Tricks and treats',
        donor: ''
    },
    {
        gift: '1 κάρτα για δωρεάν γεύμα',
        donor: 'ANCHO'
    },
    {
        gift: '1 τενεκές Ελαιόλαδο',
        donor: 'Αλβενιώτη'
    },
    {
        gift: '1 Πεταλούδα για κολιέ',
        donor: 'SWAROVSKI'
    },
    {
        gift: 'Γυναικεία ένδυση',
        donor: 'MARIANNA’S WARDROBE '
    },
    {
        gift: '1 Γεύμα αξίας 50€',
        donor: 'FRIDAYS'
    },
    {
        gift: 'Πακέτο προΪόντων',
        donor: 'BIC'
    },
    {
        gift: '1 δωροεπιταγή αξίας 50 ευρώ',
        donor: 'Tricks and treats '
    },
    {
        gift: '1 Μαρμάρινο διακοσμητικό',
        donor: 'IKTINOS MARMARON '
    },
    {
        gift: '1 i-bank payband προ-φορτισμένο με 100€',
        donor: 'Εθνική Τράπεζα '
    },
    {
        gift: '3 διανυκτερεύσεις για 2 άτομα',
        donor: 'AIROTEL'
    },
    {
        gift: '1 φουλάρι',
        donor: 'BRACCIALETTI CONCEPTS'
    },
    {
        gift: '1 Γεύμα αξίας 50€',
        donor: 'FRIDAYS'
    },
    {
        gift: '1 διακοσμητικό χώρου',
        donor: 'ZERTEO'
    },
    {
        gift: 'Γυναικεία ένδυση',
        donor: ' MARIANNA’S WARDROBE '
    },
    {
        gift: '1 ραντεβού για μανικιούρ',
        donor: 'FairyNails'
    },
    {
        gift: '1 Πακέτο Περιποίησης',
        donor: 'MESSINIAN SPA '
    },
    {
        gift: '1 Βραχιόλι ασημί',
        donor: 'KESSARIS'
    },
    {
        gift: '1 κάρτα για δωρεάν γεύμα',
        donor: 'ANCHO'
    },
    {
        gift: '1 ώρα escape room',
        donor: 'Mastermind Μοναστηράκι'
    },
    {
        gift: '1 i-bank payband προ-φορτισμένο με 100€',
        donor: 'Εθνική Τράπεζα'
    },
    {
        gift: '1 δωροεπιταγή αξίας 100 ευρώ',
        donor: 'Πλαίσιο Σύλλογος Γονέων'
    },
    {
        gift: 'Προιόντα περιποίησης',
        donor: 'APIVITA'
    },
    {
        gift: '1 εκτυπωτής DeskJet 2130 hp',
        donor: 'SASM'
    },
    {
        gift: '1 δαχτυλίδι με αλεξανδρίτη',
        donor: 'S.KANDARAKIS'
    },
    {
        gift: '1 Ζευγάρι γυαλιών ηλίου Original vintage',
        donor: ''
    },
    {
        gift: '1 διήμερη διαμονή σε Junior suite αξίας 380€',
        donor: 'ΜΑΥΡΟΜΙΧΑΛΑΙ'
    },
    {
        gift: '3 πακέτα με καφέδες',
        donor: 'STARBUCKS COFFEE'
    },
    {
        gift: '1 δωροεπιταγή για μαθήματα χορού ενός μήνα',
        donor: 'Galena\'s Dance Studios Χολαργός'
    },
    {
        gift: '1 Smart watch GSM & bluetooth Watch',
        donor: 'CONCEPTUM'
    },
    {
        gift: '1 Ραντεβού για 1 ώρα SPA',
        donor: 'The Margi Spa'
    },
    {
        gift: '1 ραντεβού για μανικιούρ',
        donor: 'FairyNails'
    },
    {
        gift: '1 Παγούρι THERMOS',
        donor: 'CHILLY’S TUMBLER'
    }
];
  
 
/*
  
73 1 i-bank payband προ-φορτισμένο με 100€ Εθνική Τράπεζα 0928
89 1 δωροεπιταγή αξίας 100 ευρώ από το Πλαίσιο Σύλλογος Γονέων 0977
30 Γυναικεία ένδυση MARIANNA’S WARDROBE 1003
90 1 δωροεπιταγή αξίας 100 ευρώ από το Πλαίσιο Σύλλογος Γονέων 1043
80 1 Βραχιόλι KESSARIS 1051
40 Γυναικεία ένδυση MARIANNA’S WARDROBE 1102
56 1 κάρτα για δωρεάν γεύμα ANCHO 1132
18 Προιόντα περιποίησης APIVITA 1141
31 Γυναικεία ένδυση MARIANNA’S WARDROBE 1149
6 Πακέτο προΪόντων BIC 1192
34 Γυναικεία ένδυση MARIANNA’S WARDROBE 1252
84 1 εκτυπωτής DeskJet 2130 hp SASM 1258
64 1 δαχτυλίδι με αλεξανδρίτη S.KANDARAKIS 1259
29 1 Ζευγάρι γυαλιών ηλίου Original vintage 1275
47 Γυναικεία ένδυση MARIANNA’S WARDROBE 1337
16 1 Πακέτο Περιποίησης MESSINIAN SPA 1354
41 Γυναικεία ένδυση MARIANNA’S WARDROBE 1356
91 1 δωροεπιταγή αξίας 100 ευρώ από το Πλαίσιο Σύλλογος Γονέων 1363
39 Γυναικεία ένδυση MARIANNA’S WARDROBE 1372
57 1 κάρτα για δωρεάν γεύμα ANCHO 1376
48 Γυναικεία ένδυση MARIANNA’S WARDROBE 1377
71 1 διήμερη διαμονή σε Junior suite αξίας 380€ ΜΑΥΡΟΜΙΧΑΛΑΙ 1384
24 3 διανυκτερεύσεις για 2 άτομα AIROTEL 1395
84 3 πακέτα με καφέδες STARBUCKS COFFEE 1412
61 1 κάρτα για δωρεάν γεύμα ANCHO 1427
81 1 Βραχιόλι ασημί KESSARIS 1428
67 1 συλλογή liqueur Roots Premium 1456
38 Γυναικεία ένδυση MARIANNA’S WARDROBE 1527
55 1 κάρτα για δωρεάν γεύμα ANCHO 1669
1 Πακέτο προΪόντων BIC 1680
58 1 κάρτα για δωρεάν γεύμα ANCHO 1695
86 1 δωροεπιταγή για μαθήματα χορού ενός μήνα Galena's Dance Studios Χολαργός 1702
63 1 κάρτα για δωρεάν γεύμα ANCHO 1768
37 Γυναικεία ένδυση MARIANNA’S WARDROBE 1782
15 1 Πακέτο Περιποίησης MESSINIAN SPA 1785
3 Πακέτο προΪόντων BIC 1789
20 1 Γεύμα αξίας 50€ FRIDAYS 1798
9 1 Smart watch GSM & bluetooth Watch CONCEPTUM 1801
22 1 Γεύμα αξίας 50€ FRIDAYS 1838
66 1 Ραντεβού για 1 ώρα SPA The Margi Spa 1857
52 1 ραντεβού για μανικιούρ FairyNails 1868
27 1 τενεκές Ελαιόλαδο Αλβενιώτη 1870
11 1 ACT-200 Action Cam TURBOX 1874
50 1 ραντεβού για μανικιούρ FairyNails 1936
13 1 Παγούρι THERMOS CHILLY’S TUMBLER 2046
42 Γυναικεία ένδυση MARIANNA’S WARDROBE 2073
43 Γυναικεία ένδυση MARIANNA’S WARDROBE 2108
4 Πακέτο προΪόντων BIC 2201
32 Γυναικεία ένδυση MARIANNA’S WARDROBE 2268
51 1 ραντεβού για μανικιούρ FairyNails 2309
77 1 κόκκινη τσάντα BRACCIALETTI CONCEPTS 2419
53 1 ραντεβού για μανικιούρ FairyNails 2422
10 1 GoCam Extreme Q3H 4K ULTRA HD CONCEPTUM 2428
7 Γλυπτό ελιάς κ. Πρωτοπαπά-Αναγνωστοπούλου 2436
70 1 Κολιέ Μαριαλένα Ταρτσίνη 2514
5 Πακέτο προΪόντων BIC 2605
68 1 ώρα escape room Mastermind Μοναστηράκι 2629
23 1 Γεύμα αξίας 50€ FRIDAYS 2650
45 Γυναικεία ένδυση MARIANNA’S WARDROBE 2673
8 1 Γεύμα 2 ατόμων αξίας 100€ Gaspar 2763*/