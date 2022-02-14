import { Utils }  from '@rpgjs/common'
import { ParameterManager } from './ParameterManager'
import { RpgPlayer } from './Player'
import { 
    ATK,
    PDEF,
    SDEF
} from '../presets'
import { Effect } from '@rpgjs/database'
import { ElementManager } from './ElementManager';
import { EffectManager } from './EffectManager';

const { 
    applyMixins
} = Utils

export class BattleManager {

    /** 
     * Apply damage. Player will lose HP. the `otherPlayer` parameter is the other player, the one who attacks.
     * 
     * If you don't set the skill parameter, it will be a physical attack.
     * The attack formula is already defined but you can customize it in the server options
     * 
     * ```ts
     * player.applyDamage(otherPlayer) // returns { damage: number }
     * ```
     * 
     * @title Apply Damage
     * @method player.applyDamage(otherPlayer,skill)
     * @param {RpgPlayer} otherPlayer The attacking player
     * @param {any} [skill]
     * @returns {object} 
     * @memberof BattleManager
     * */
    applyDamage(otherPlayer: RpgPlayer, skill: any): { 
        damage: number, 
        critical: boolean, 
        elementVulnerable: boolean,
        guard: boolean,
        superGuard: boolean
    } {
        const getParam = (player) => {
            const params = {}
            this.parameters.forEach((val, key) => {
                params[key] = player.param[key]
            })
            return {
                [ATK]: player.atk,
                [PDEF]: player.pdef,
                [SDEF]: player.sdef,
                ...params
            }
        }
        let damage = 0, fn
        let critical = false
        let guard = false
        let superGuard = false
        let elementVulnerable = false
        const paramA = getParam(otherPlayer)
        const paramB = getParam(this)
        if (skill) {
            fn = this.getFormulas('damageSkill')
            if (!fn) {
                throw new Error('Skill Formulas not exists')
            }
            damage = fn(paramA, paramB, skill)
        }
        else {
            fn = this.getFormulas('damagePhysic')
            if (!fn) {
                throw new Error('Physic Formulas not exists')
            }
            damage = fn(paramA, paramB)
            const coef = this.coefficientElements(otherPlayer)
            if (coef >= 2) {
                elementVulnerable = true
            }
            damage *= coef
            fn = this.getFormulas('damageCritical')
            if (fn) {
                let newDamage = fn(damage, paramA, paramB)
                if (damage != newDamage) {
                    critical = true
                }
                damage = newDamage
            }
        }
        if (this.hasEffect(Effect.GUARD)) {
            fn = this.getFormulas('damageGuard')
            if (fn) {
                let newDamage = fn(damage, paramA, paramB)
                if (damage != newDamage) {
                    guard = true
                }
                damage = newDamage
            }
        }
        if (this.hasEffect(Effect.SUPER_GUARD)) {
            damage /= 4
        }
        this.hp -= damage
        return {
            damage,
            critical,
            elementVulnerable,
            guard,
            superGuard
        }
    }
    
    getFormulas(name: string) {
        return this.server.damageFormulas[name]
    }
}

applyMixins(BattleManager, [ParameterManager, ElementManager, EffectManager])

export interface BattleManager extends ParameterManager, ElementManager, EffectManager {
    name: string,
    server: any
 }