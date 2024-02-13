namespace averageAge {
  export enum Gender {
    Male = 0,
    Female
  }

  export interface FamilyMember {
    name: string;
    birthYear: number;
    gender: Gender;
  }

  export const familyMembers: FamilyMember[] = [
    {
      name: "engin",
      birthYear: 1992,
      gender: Gender.Male
    },
    {
      name: "eda",
      birthYear: 1996,
      gender: Gender.Female
    },
    {
      name: "hakan",
      birthYear: 1994,
      gender: Gender.Male
    },
    {
      name: "merve",
      birthYear: 1999,
      gender: Gender.Female
    },
    {
      name: "namık",
      birthYear: 1990,
      gender: Gender.Male
    }
  ];

  export const currentYear: number = new Date().getFullYear();

  // Beklenenler
  // 1.TypeScript namespace nedir ne işe yarar?
  // 2. En genç aile üyesi -- adını ve yaşını yazdıralım
  // 3. En yaşlı aile üyesini yazdıralım
  // 4. Ailenin yaş ortalamasını yazdıralım
  //

  // 1

  // Kodu organize etmek ve modülerliği arttırmak için kullanılan bir yapıdır.
  // Global kapsamda çakışmaları önler.

  // 2

  export const youngestFamMember = familyMembers.reduce(
    (youngest, member) => {
      const age = currentYear - member.birthYear;
      if (age < youngest.age) {
        return { age, member };
      }
      return youngest;
    },
    { age: Infinity, member: null as FamilyMember | null }
  );

  console.log(youngestFamMember);

  // 3

  export const oldestFamMember = familyMembers.reduce(
    (oldest, member) => {
      const age = currentYear - member.birthYear;
      if (age > oldest.age) {
        return { age, member };
      }
      return oldest;
    },
    { age: -Infinity, member: null as FamilyMember | null }
  );

  console.log(oldestFamMember);
}

// 4

const totalAge = averageAge.familyMembers.reduce(
  (sum, member) => sum + (averageAge.currentYear - member.birthYear),
  0
);
const average = totalAge / averageAge.familyMembers.length;
console.log(average);

////

const htmlContent = `
<h3>En genç aile üyesi: ${averageAge.youngestFamMember.member?.name.toUpperCase()} </h3>
<h4>Yaşı: ${averageAge.youngestFamMember.age} </h4>
<hr/>
<h3>En yaşlı aile üyesi: ${averageAge.oldestFamMember.member?.name.toUpperCase()} </h3>
<h4>Yaşı: ${averageAge.oldestFamMember.age} </h4>
<hr/>
<h3>Ailenin yaş ortalaması: ${average} </h3>`;

document.getElementById("app")?.insertAdjacentHTML("afterbegin", htmlContent);
