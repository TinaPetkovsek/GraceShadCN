import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function App() {
  return (
    <>
      <div class="container">
        <Tabs defaultValue="zivali">
          <TabsList>
            <TabsTrigger value="zivali">Živali</TabsTrigger>
            <TabsTrigger value="sadje">Sadje</TabsTrigger>
          </TabsList>
          <TabsContent value="zivali">
            <div className="grid grid-cols-3 gap-2">
              <Card>
                <CardHeader>
                  <CardTitle>Slon</CardTitle>
                  <CardDescription>
                    Sloni so večja skupina sesalcev, ki tvorijo družina živali
                    Elephantidae v redu trobčarjev.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    className="mb-1 rounded-sm"
                    src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT6y09yzjZgTgDakotcP0I1a1lw1bwLenGGCQYe54D4x66GzlWTW5x-hMklvlfTDXLF"
                  ></img>
                  <CardDescription>
                    Danes so poznane tri živeče vrste, ki jim grozi izumrtje:
                    afriški gozdni slon, afriški savanski slon in azijski slon.
                    Sloni živijo v podsaharski Afriki, Južni Aziji in
                    Jugovzhodni Aziji.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="https://sl.wikipedia.org/wiki/Slon">
                    <Button className="w-full">Več o slonu</Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Žirafa</CardTitle>
                  <CardDescription>
                    Žiráfa je visok afriški sesalec.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    className="mb-1 rounded-sm"
                    src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQVtv8s0UPfAk9z-y_PMve7sVi9Q2jsJxTa0YV1fnRgfIympdhhj2OlfRnW1XCxPUEG"
                  ></img>
                  <CardDescription>
                    Natančneje, gre za sodoprstega kopitarja. Je najvišja živa
                    kopenska žival in največji prežvekovalec na Zemlji.
                    Tradicionalno je veljalo, da so žirafe ena vrsta, Giraffa
                    camelopardalis, z devetimi podvrstami.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="https://sl.wikipedia.org/wiki/%C5%BDirafa">
                    <Button className="w-full">Več o žirafi</Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Konj</CardTitle>
                  <CardDescription>
                    Konj - znanstveno ime Equus caballus - je velik lihoprsti
                    kopitar in ena izmed sedmih sodobnih vrst rodu Equus, v
                    katerega med drugim sodijo še osli, polosli in zebre.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    className="mb-1 rounded-sm"
                    src="https://www.nutribiovet.si/wp-content/uploads/2015/04/horse-eating-meadow.jpg"
                  ></img>
                  <CardDescription>
                    Samcu domačega konja pravimo žrebec, samici kobila, mladiču
                    pa žrebe. Kastriran žrebec je kastrat. Poni je po pravilih
                    Mednarodne konjeniške zveze - Fédération Équestre
                    Internationale - FEI - konj nižji od 148 cm - višina vihra -
                    oz. podkovan nižji od 149 cm. Poznamo pa tudi miniaturne
                    konje - zelo majhne ponije. Najmanjša pasma miniaturnih konj
                    je Falabella - zelo redka pasma, katere viher ne sme preseči
                    78 cm.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="https://sl.wikipedia.org/wiki/Doma%C4%8Di_konj">
                    <Button className="w-full">Več o konju</Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="sadje">
            <div className="grid grid-cols-3 gap-2">
              <Card>
                <CardHeader>
                  <CardTitle>Jabolko</CardTitle>
                  <CardDescription>
                    Jabolko je sadež, ki raste na drevesu jablani.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    className="mb-1 rounded-sm"
                    src="https://images.24ur.com/media/images/1500x1000/Sep2018/5596538d40_62127999.jpg?v=d41d"
                  ></img>
                  <CardDescription>
                    Spada med kulturne rastline, ki jih je vzgojil človek s
                    pomočjo križanja. Korenine jabolka izvirajo iz Azije. V
                    Evropo je verjetno prispelo s trgovci. Obstaja več kot 7500
                    kultivarjev jabolk. Jabolko zraste iz pet-listnega cveta.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="https://sl.wikipedia.org/wiki/Jabolko">
                    <Button className="w-full">Več o jabolku</Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Banana</CardTitle>
                  <CardDescription>
                    Banana je užiten sadež, plod različnih vrst zelnatih rastlin
                    iz roda Musa in je lahko različnih barv, velikosti in
                    trdnosti.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    className="mb-1 rounded-sm"
                    src="https://images.24ur.com/media/images/884xX/Jun2008/60148579.jpg?v=d41d"
                  ></img>
                  <CardDescription>
                    Botanično je jagoda. Običajno je podolgovata in ukrivljena,
                    z mehkim škrobnatim mesom, pokritim z zelenim, rumenim,
                    rdečim ali vijoličnim olupkom, ki ob zrelosti porjavi.
                    Sadeži v šopih visijo z drevesa. Skoraj vse moderne jedilne
                    partenokarpne -brez semen- banane izhajajo iz dveh divjih
                    vrst - Musa acuminata in Musa balbisiana.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="https://sl.wikipedia.org/wiki/Banana">
                    <Button className="w-full">Več o banani</Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
