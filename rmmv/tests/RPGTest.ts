declare var traits: RPG.Trait;

declare var RPGAudioFileTest: RPG.AudioFile;
RPGAudioFileTest.name = '';
RPGAudioFileTest.pan = 0;
RPGAudioFileTest.pitch = 0;
RPGAudioFileTest.volume = 0;

declare var RPGActorTest: RPG.Actor;
RPGActorTest.battlerName = '';
RPGActorTest.characterIndex = 0;
RPGActorTest.characterName = '';
RPGActorTest.classId = 0;
RPGActorTest.equips = [0, 1, 2];
RPGActorTest.faceIndex = 0;
RPGActorTest.faceName = '';
RPGActorTest.id = 0;
RPGActorTest.initialLevel = 0;
RPGActorTest.maxLevel = 0;
RPGActorTest.name = '';
RPGActorTest.nickname = '';
RPGActorTest.note = '';
RPGActorTest.profile = '';
RPGActorTest.traits = [traits, traits];

declare var RPGAnimationTimingTest: RPG.Animation.Timing;
RPGAnimationTimingTest.flashColor = [0, 1, 2];
RPGAnimationTimingTest.flashDuration = 0;
RPGAnimationTimingTest.flashScope = 0;
RPGAnimationTimingTest.frame = 0;
RPGAnimationTimingTest.se = RPGAudioFileTest;

declare var RPGAnimationTest: RPG.Animation;
RPGAnimationTest.animation1Hue = 0;
RPGAnimationTest.animation1Name = '';
RPGAnimationTest.animation2Hue = 0;
RPGAnimationTest.animation2Name = '';
RPGAnimationTest.frames = [[[0, 2, 4]]];
RPGAnimationTest.id = 0;
RPGAnimationTest.name = '';
RPGAnimationTest.position = 0;
RPGAnimationTest.timings = [RPGAnimationTimingTest, RPGAnimationTimingTest];

declare var RPGArmorTest: RPG.Armor;
RPGArmorTest.atypeId = 0;
RPGArmorTest.description = '';
RPGArmorTest.etypeId = 0;
RPGArmorTest.iconIndex = 0;
RPGArmorTest.id = 0;
RPGArmorTest.name = '';
RPGArmorTest.note = '';
RPGArmorTest.params = [0, 1, 2];
RPGArmorTest.price = 0;
RPGArmorTest.traits = [traits, traits];

declare var RPGMoveCommandTest: RPG.MoveCommand;
RPGMoveCommandTest.code = 0;
RPGMoveCommandTest.parameters = [];

declare var RPGMoveRouteTest: RPG.MoveRoute;
RPGMoveRouteTest.list = [RPGMoveCommandTest, RPGMoveCommandTest];
RPGMoveRouteTest.repeat = true;
RPGMoveRouteTest.skippable = true;
RPGMoveRouteTest.wait = true;

declare var RPGEventPageConditionsTest: RPG.EventPage.Conditions;
RPGEventPageConditionsTest.actorId = 0;
RPGEventPageConditionsTest.actorValid = true;
RPGEventPageConditionsTest.itemId = 0;
RPGEventPageConditionsTest.itemValid = true;
RPGEventPageConditionsTest.selfSwitchCh = 'A';
RPGEventPageConditionsTest.selfSwitchValid = true;
RPGEventPageConditionsTest.switch1Id = 0;
RPGEventPageConditionsTest.switch1Valid = true;
RPGEventPageConditionsTest.switch2Id = 0;
RPGEventPageConditionsTest.switch2Valid = true;
RPGEventPageConditionsTest.variableId = 0;
RPGEventPageConditionsTest.variableValid = true;
RPGEventPageConditionsTest.variableValue = 0;

declare var RPGEventPageImageTest: RPG.EventPage.Image;
RPGEventPageImageTest.characterIndex = 0;
RPGEventPageImageTest.characterName = '';
RPGEventPageImageTest.direction = 0;
RPGEventPageImageTest.pattern = 0;
RPGEventPageImageTest.tileId = 0;

declare var RPGEventCommandTest: RPG.EventCommand;
RPGEventCommandTest.code = 0;
RPGEventCommandTest.indent = 0;
RPGEventCommandTest.parameters = [];


declare var RPGEventPageTest: RPG.EventPage;
RPGEventPageTest.conditions = RPGEventPageConditionsTest;
RPGEventPageTest.directionFix = true;
RPGEventPageTest.image = RPGEventPageImageTest;
RPGEventPageTest.list = [RPGEventCommandTest, RPGEventCommandTest];
RPGEventPageTest.moveFrequency = 0;
RPGEventPageTest.moveRoute = [RPGMoveRouteTest, RPGMoveRouteTest];
RPGEventPageTest.moveSpeed = 0;
RPGEventPageTest.moveType = 0;
RPGEventPageTest.priorityType = 0;
RPGEventPageTest.stepAnime = true;
RPGEventPageTest.through = true;
RPGEventPageTest.trigger = 0;
RPGEventPageTest.walkAnime = true;

declare var RPGEventTest: RPG.Event;
RPGEventTest.id = 0;
RPGEventTest.name = '';
RPGEventTest.note = '';
RPGEventTest.pages = [RPGEventPageTest, RPGEventPageTest];
RPGEventTest.x = 0;
RPGEventTest.y = 0;

declare var RPGBattleEventPageConditionsTest: RPG.BattleEventPage.Conditions;
RPGBattleEventPageConditionsTest.actorHp = 0;
RPGBattleEventPageConditionsTest.actorId = 0;
RPGBattleEventPageConditionsTest.actorValid = true;
RPGBattleEventPageConditionsTest.enemyHp = 0;
RPGBattleEventPageConditionsTest.enemyIndex = 0;
RPGBattleEventPageConditionsTest.enemyValid = true;
RPGBattleEventPageConditionsTest.switchId = 0;
RPGBattleEventPageConditionsTest.switchValid = true;
RPGBattleEventPageConditionsTest.turnA = 0;
RPGBattleEventPageConditionsTest.turnB = 0;
RPGBattleEventPageConditionsTest.turnEnding = true;
RPGBattleEventPageConditionsTest.turnValid = true;

declare var RPGBattleEventPageTest: RPG.BattleEventPage;
RPGBattleEventPageTest.conditions = RPGBattleEventPageConditionsTest;
RPGBattleEventPageTest.list = [];
RPGBattleEventPageTest.span = 0;
