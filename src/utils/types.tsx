export type user = {
    rule: userRules,
    email: string,
    imageUri:string,
    name:string,
    surrname:string,
    
}

export type userRules = 'scrumMaster' | 'prodactOwner' | 'developer'