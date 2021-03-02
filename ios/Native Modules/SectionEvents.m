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
  NSLog(@"onSectionLoaded %@ %@", sectionName, event);
}

RCT_EXPORT_METHOD(onArticlePress:(NSString *) url isPuff:(NSString *) isPuff)
{
  NSLog(@"onArticlePress %@ %@", url, isPuff);
}

RCT_EXPORT_METHOD(onArticleLoaded:(NSString *) articleId extras: (NSDictionary *) extras)
{
  NSLog(@"onArticleLoaded %@ %@", articleId, extras);
}

RCT_EXPORT_METHOD(onAuthorPress:(NSString *) slug)
{
  NSLog(@"onAuthorPress %@", slug);
}

RCT_EXPORT_METHOD(onLinkPress:(NSString *) url)
{
  NSLog(@"onLinkPress %@", url);
}

RCT_EXPORT_METHOD(onVideoPress:(NSDictionary *) info)
{
  NSLog(@"onVideoPress %@", info);
}

RCT_EXPORT_METHOD(onTopicPress:(NSString *) url)
{
  NSLog(@"onTopicPress %@", url);
}

RCT_EXPORT_METHOD(onCommentsPress:(NSString *) articleId url:(NSString *) url)
{
  NSLog(@"onCommentsPress %@ %@",articleId, url);
}

RCT_EXPORT_METHOD(onCommentGuidelinesPress)
{
  NSLog(@"onCommentGuidelinesPress");
}

@end
