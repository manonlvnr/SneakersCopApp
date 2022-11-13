import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Lexicon() {
    return (
        <ScrollView >
            <TouchableOpacity>
            <Text>Camp Out : Le fait d’attendre devant un shop (plusieurs heures) pour être le premier à obtenir une paire. Le camp out est maintenant globalement terminé. Les paires sortent en raffle.</Text>
            <Text>Collection capsule : Une collection limité réalisée en partenariat avec une marque indépendante, un designer…</Text>
            <Text>Cop : Le fait de vouloir acheter la paire. Je cop.</Text>
            <Text>Drop : Tout l’inverse, quand on laisse passer une paire qui ne nous intéresse pas. Drop.</Text>
            <Text>DS (Dead Stock): Quand une paire est neuve, jamais portée ni sortie de son emballage, sa condition est DS.</Text>
            <Text>Fake: Quand une paire est fausse, qu’il s’agit d’une contrefaçon.</Text>
            <Text>GR (General Release): Quand une paire est disponible dans toutes les boutiques, en grande quantité.
Hook-up : Quand vous ne pouvez pas acheter la paire vous même et que quelqu’un peut la récupérer pour vous. L’intermédiaire pourra parfois demander une petite commission pour vous avoir hook-up la paire.
HS (Hyperstrike): Généralement, les paires HS sont distribuées en maximum 100 exemplaires. Il s’agit de modèles très limités, parfois issus d’une collection capsule.
HTM : H pour Hiroshi Fujiwara, T pour Tinker Hatfield, M pour Mark Parker
Legit : Ce terme que l’on trouve souvent sur les groupes spécialisés Facebook signifie de la paire est authentique.
LPU (Last Pick Up): Le dernier achat d’une paire de sneakers.
NDS (Near Dead Stock): La paire a déjà été portée une fois et son état est comme neuf. Etant donné qu’elle est sortie de sa boite, son état n’est plus DS mais NDS.
Never Worn : Une paire jamais portée.
OG (Original): Ce terme désigne tout simplement un modèle original de sneakers. Parfois, les marques rééditent des versions OG plusieurs années après.
QS (Quickstrike): Il s’agit de paires qui sortent en édition limitée et chez un nombre de distributeurs réduit.
Restock : Quand une marque ou un shop décide de remettre en vente une paire qui était sold out.
Rocker : Le fait de porter une paire.
Sample : Il s’agit d’un prototype qui n’est pas destiné à être commercialisé. On voit souvent des sample de modèles dans des coloris qui ne sont jamais sortis en boutique.
Size Swap : Quand vous cherchez à échanger votre paire contre le même modèle dans une taille différente, vous pouvez demander un size swap.
Sole Swap : Que ce soit pour un custom ou une restauration, le Sole Swap consiste à changer la semelle inférieure de la basket.
Swoosh : Designe la virgule de Nike.
Trade : Lorsqu’un individu souhaite échanger une paire contre un autre modèle ou quoique ce soit, on utilise le terme trade.
TTS : True to size. Quand quelqu’un demande comment une paire taille, on peut lui répondre TTS si elle taille correctement.
Pinroll : Cela consiste a remonter l’ourlet de son jean pour mettre en valeur ses baskets.
WTB : Want to buy
WTS : Want to sell
            </Text>

            </TouchableOpacity>

        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: {
        height: 600,
    },
});
