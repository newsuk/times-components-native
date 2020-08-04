//
//  TopicEvents.m
//  TimesComponents
//
//  Created by Konstantinidis, Emmanouil on 21/07/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface TopicEvents : NSObject <RCTBridgeModule>
@end

@implementation TopicEvents

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(onArticlePress:(NSString *) url)
{
  NSLog(@"onArticlePress %@", url);
}

@end
