export async function fetchImagesFromUnsplash(tag, count) {
  // // get fetch res
  // const res = await fetch(`https://api.unsplash.com/search/photos?query=${tag}&per_page=${count}`, {
  //   headers: {
  //     Authorization: `Client-ID ${process.env.unsplash_access_key}`
  //   }
  // });

  // // error fetch res
  // if (!res.ok) { throw new Error("Failed to fetch images"); }

  // // parse data
  // const data = await res.json();

  // return data
  // return data.results.map((img) => ({
  //   id: img.id,
  //   url: img.urls.regular,
  //   alt: img.alt_description
  // }));



  return [
    {
        "id": "RHAtRIT3-CE",
        "url": "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nc3xlbnwwfHx8fDE3NDQ3OTg4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "couple wearing silver-colored rings"
    },
    {
        "id": "dvF6s1H1x68",
        "url": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHwyfHx3ZWRkaW5nc3xlbnwwfHx8fDE3NDQ3OTg4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "man in blue suit kissing woman in white wedding dress"
    },
    {
        "id": "1Bs2sZ9fD2Q",
        "url": "https://images.unsplash.com/photo-1591604466107-ec97de577aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nc3xlbnwwfHx8fDE3NDQ3OTg4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "man in gray suit and woman in white wedding dress"
    },
    {
        "id": "HabFYy1Iic0",
        "url": "https://images.unsplash.com/photo-1574871786514-46e1680ea587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHw0fHx3ZWRkaW5nc3xlbnwwfHx8fDE3NDQ3OTg4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "woman in white dress holding bouquet of flowers"
    },
    {
        "id": "YeJWDWeIZho",
        "url": "https://images.unsplash.com/photo-1553915632-175f60dd8e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHw1fHx3ZWRkaW5nc3xlbnwwfHx8fDE3NDQ3OTg4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "two gold-colored rings on paper"
    },
    {
        "id": "5d4XBj7GYeo",
        "url": "https://images.unsplash.com/photo-1606490194859-07c18c9f0968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHw2fHx3ZWRkaW5nc3xlbnwwfHx8fDE3NDQ3OTg4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "man and woman kissing on green grass field during sunset"
    },
    {
        "id": "hw_sKmjb0ns",
        "url": "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHw3fHx3ZWRkaW5nc3xlbnwwfHx8fDE3NDQ3OTg4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "clear long-stem wine glasses on table"
    },
    {
        "id": "eg-72fI9wK4",
        "url": "https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHw4fHx3ZWRkaW5nc3xlbnwwfHx8fDE3NDQ3OTg4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "greyscale photography of newly wed"
    },
    {
        "id": "o8tnvY9iB3E",
        "url": "https://images.unsplash.com/photo-1600096194735-ec70b8463112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHw5fHx3ZWRkaW5nc3xlbnwwfHx8fDE3NDQ3OTg4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "brown wooden benches inside building"
    },
    {
        "id": "5BB_atDT4oA",
        "url": "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHwxMHx8d2VkZGluZ3N8ZW58MHx8fHwxNzQ0Nzk4ODYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "groom beside bride holding bouquet flowers"
    },
    {
        "id": "o2zFDffQnDM",
        "url": "https://images.unsplash.com/photo-1535185384036-28bbc8035f28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHwxMXx8d2VkZGluZ3N8ZW58MHx8fHwxNzQ0Nzk4ODYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "peach, yellow, and white flowers"
    },
    {
        "id": "IfjHaIoAoqE",
        "url": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHwxMnx8d2VkZGluZ3N8ZW58MHx8fHwxNzQ0Nzk4ODYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "a bride and groom walking on a hill"
    },
    {
        "id": "lR--zjgQRY0",
        "url": "https://images.unsplash.com/photo-1606490208247-b65be3d94cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHwxM3x8d2VkZGluZ3N8ZW58MHx8fHwxNzQ0Nzk4ODYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "bride and groom standing on grass field during daytime"
    },
    {
        "id": "fXAuCMEYGY4",
        "url": "https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHwxNHx8d2VkZGluZ3N8ZW58MHx8fHwxNzQ0Nzk4ODYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "4-layered fondant cake on table"
    },
    {
        "id": "8yPA6ZYq0-s",
        "url": "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHwxNXx8d2VkZGluZ3N8ZW58MHx8fHwxNzQ0Nzk4ODYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "woman holding white and pink rose flower bouquet"
    },
    {
        "id": "8WODX7nO2JE",
        "url": "https://images.unsplash.com/photo-1515626553181-0f218cb03f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzg3MDl8MHwxfHNlYXJjaHwxNnx8d2VkZGluZ3N8ZW58MHx8fHwxNzQ0Nzk4ODYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "alt": "close up photography of silver-colored wedding rings on pink gerbera daisy flower"
    }
];
}