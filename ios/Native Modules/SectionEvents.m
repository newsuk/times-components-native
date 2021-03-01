//
//  SectionEvents.m
//  TimesComponents
//
//  Created by Kevin Amiranoff on 01/03/2021.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface SectionEvents : RCTEventEmitter <RCTBridgeModule>
@end

@implementation SectionEvents

RCT_EXPORT_MODULE();

-(NSArray<NSString *> *)supportedEvents {
    return @[@"updateReadArticles", @"scrollToArticleId"];
}

RCT_EXPORT_METHOD(onSectionLoaded:(NSString *) sectionName event:(NSDictionary *) event)
{
  NSLog(@"onSectionLoaded  %@ %@", sectionName, event);
}

@end
