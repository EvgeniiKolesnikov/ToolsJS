enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard
console.log(membership);                  // 1
const membershipReverse = Membership[2]
console.log(membershipReverse);           // Premium


enum SozilaMedia {
  vk = 'vk',
  fb = 'fb',
  insta = 'insta'
}

const social = SozilaMedia.insta
console.log(social);                      // insta
