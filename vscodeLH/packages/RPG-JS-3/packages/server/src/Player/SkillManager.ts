import { Utils }  from '@rpgjs/common'
import { Effect } from '@rpgjs/database'
import { SkillLog } from '../logs'
import { StateManager } from './StateManager'
import { EffectManager } from './EffectManager'
import { ParameterManager } from './ParameterManager';
import { RpgPlayer } from './Player';

import { 
    INT
} from '../presets'

const { 
    isArray, 
    isString, 
    isInstanceOf,
    applyMixins
} = Utils

export class SkillManager {

    skills: any[]

    private _getSkillIndex(skillClass) {
        return this.skills.findIndex(skill => {
            if (isString(skill)) {
                return skill.id == skillClass
            }
            return isInstanceOf(skill, skillClass)
        })
    }

    /**
     * Retrieves a skill. Returns null, if not found
     * ```ts
     * import Fire from 'your-database/skills/fire'
     * 
     * player.getSkill(Fire)
     *  ```
     * 
     * @title Get Skill
     * @method player.getSkill(skillClass)
     * @param {SkillClass} skillClass 
     * @returns {instance of SkillClass | null}
     * @memberof SkillManager
     */
    getSkill(skillClass) {
        const index = this._getSkillIndex(skillClass)
        return this.skills[index]
    }

    /**
     * Learn a skill. Attributes the coefficient 1 to the parameter INT (intelligence) if cd is not present on the class.
     * 
     * `onLearn()` method is called on the SkillClass
     * 
     * ```ts
     * import Fire from 'your-database/skills/fire'
     * 
     * player.learnSkill(Fire)
     *  ```
     * 
     * @title Learn Skill
     * @method player.learnSkill(skillClass)
     * @param {SkillClass} skillClass 
     * @returns {instance of SkillClass}
     * @memberof SkillManager
     */
    learnSkill(skillClass) {
        const instance = new skillClass()
        if (!instance.coefficient) instance.coefficient = {
            [INT]: 1
        }
        this.skills.push(instance)
        this['execMethod']('onLearn', [this], instance)
        return instance
    }

    /**
     * Forget a skill
     * 
     * `onForget()` method is called on the SkillClass
     * 
     * ```ts
     * import Fire from 'your-database/skills/fire'
     * 
     * try {
     *      player.forgetSkill(Fire) 
     * }
     * catch (err) {
     *      console.log(err)
     * }
     *  ```
     * 
     * @title Forget Skill
     * @method player.learnSkill(skillClass)
     * @param {SkillClass} skillClass 
     * @throws {SkillLog} notLearned 
     * If trying to forget a skill not learned
     *  ```
     * {
     *      id: SKILL_NOT_LEARNED,
     *      msg: '...'
     * }
     * ```
     * @returns {instance of SkillClass}
     * @memberof SkillManager
     */
    forgetSkill(skillClass) {
        const index = this._getSkillIndex(skillClass)
        if (index == -1) {
            throw SkillLog.notLearned(skillClass)
        }
        this.skills.splice(index, 1)
        const instance = this.skills[index]
        this['execMethod']('onForget', [this], instance)
        return instance
    }

    /**
     * Using a skill
     * 
     * `onUse()` method is called on the SkillClass
     * 
     * If other players are indicated then damage will be done to these other players. The method `applyDamage()` will be executed
     * 
     * ```ts
     * import Fire from 'your-database/skills/fire'
     * 
     * try {
     *      player.useSkill(Fire) 
     * }
     * catch (err) {
     *      console.log(err)
     * }
     *  ```
     * 
     * or 
     * 
     * 
     * * ```ts
     * import Fire from 'your-database/skills/fire'
     * 
     * try {
     *      player.useSkill(Fire, otherPlayer) 
     * }
     * catch (err) {
     *      console.log(err)
     * }
     *  ```
     * 
     * @title Use Skill
     * @method player.useSkill(skillClass,otherPlayer)
     * @param {SkillClass} skillClass
     * @param {Array<RpgPlayer> | RpgPlayer} [otherPlayer] 
     * @throws {SkillLog} restriction 
     * If the player has the `Effect.CAN_NOT_SKILL` effect 
     *  ```
     * {
     *      id: RESTRICTION_SKILL,
     *      msg: '...'
     * }
     * ```
     * @throws {SkillLog} notLearned 
     * If the player tries to use an unlearned skill
     *  ```
     * {
     *      id: SKILL_NOT_LEARNED,
     *      msg: '...'
     * }
     * ```
     * @throws {SkillLog} notEnoughSp 
     * If the player does not have enough SP to use the skill
     *  ```
     * {
     *      id: NOT_ENOUGH_SP,
     *      msg: '...'
     * }
     * ```
     * @throws {SkillLog} chanceToUseFailed 
     * If the chance to use the skill has failed (defined with the `hitRate` property)
     *  ```
     * {
     *      id: USE_CHANCE_SKILL_FAILED,
     *      msg: '...'
     * }
     * ```
     * 
     * `onUseFailed()` method is called on the SkillClass
     * 
     * @returns {instance of SkillClass}
     * @memberof SkillManager
     * @todo
     */
    useSkill(skillClass, otherPlayer?: RpgPlayer | RpgPlayer[]) {
        const skill = this.getSkill(skillClass)
        if (this.hasEffect(Effect.CAN_NOT_SKILL)) {
            throw SkillLog.restriction(skillClass)
        }
        if (!skill) {
            throw SkillLog.notLearned(skillClass)
        }
        if (skill.spCost > this.sp) {
            throw SkillLog.notEnoughSp(skillClass, skill.spCost, this.sp)
        }
        this.sp -= (skill.spCost / (this.hasEffect(Effect.HALF_SP_COST) ? 2 : 1))
        const hitRate = skill.hitRate || 1
        if (Math.random() > hitRate) {
            this['execMethod']('onUseFailed', [this, otherPlayer], skill)
            throw SkillLog.chanceToUseFailed(skillClass)
        }
        if (otherPlayer) {
            let players: any = otherPlayer
            if (!isArray(players)) {
                players = [otherPlayer]
            }
            for (let player of players) {
                this.applyStates(player, skill)
                player.applyDamage(this, skill)
            } 
        }
        this['execMethod']('onUse', [this, otherPlayer], skill)
        return skill
    }
}

applyMixins(SkillManager, [ParameterManager, StateManager, EffectManager])

export interface SkillManager extends ParameterManager, StateManager, EffectManager { }